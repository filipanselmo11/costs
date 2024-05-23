import { useNavigate } from "react-router-dom";
import ProjectForm from '../components/projects/ProjectForm';
import './NewProject.css';
import api from "../api/api";

export default function NewProject() {
    const navigate = useNavigate();
    const createPost = (project) => {
        project.cost = 0;
        project.services = [];
        const body = JSON.stringify(project)
        
        api.post("/projects", body)
           .then((res) => {
                console.log(res.data);
                navigate("/projects", {state:["Projeto Criado com suceso"]});
           })
           .catch((err) => console.log(err));
    }

    return (
        <div className="new-project_container">
            <h1>
                Criar Projeto
            </h1>
            <p>
                Crie seu projeto para depois adicionar os serviços
            </p>
            <ProjectForm
                handleSumbit={createPost}
                btnText="Criar Projeto"/>
        </div>
    )
}