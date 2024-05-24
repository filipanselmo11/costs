
import { useParams } from 'react-router-dom';
import './Project.css';
import { useEffect, useState } from 'react';
import api from '../api/api';
import Loading from '../components/layout/Loading';
import Container from '../components/layout/Container';
import ProjectForm from '../components/projects/ProjectForm';
import Message from '../components/layout/Message';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {
            api.get(`/projects/${id}`)
                .then((res) => setProject(res.data))
                .catch((err) => console.log(err))
        }, 2000)
    }, [id])
    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    }
    const editPost = (project) => {
        //budget validation
        if (project.budget < project.cost) {
            //Mensagem
            setMessage("O orçamento não pode ser menor que o custo do projeto");
            setTypeMessage("error");
            return false;
        }
        const body = JSON.stringify(project);
        api.patch(`/projects/${project.id}`, body)
        .then((res) => {
            setProject(res.data);
            setShowProjectForm(false);
            setMessage("Projeto atualizado");
            setTypeMessage("success");
        })
        .catch((err) => console.log(err));
    }
    return (
        <>
            {project.name ? (
                <div className="project_details">
                    <Container customClass="column">
                        {message && <Message type={typeMessage} msg={message}/>}
                        <div className="details_container">
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className="btn"
                                onClick={toggleProjectForm}>
                                    {!showProjectForm ? 'Editar Projeto': 'Fechar'}
                                </button>
                                {!showProjectForm ? (
                                    <div className="project_info">
                                        <p>
                                            <span>Categoria</span>: {project.category.name}
                                        </p>
                                        <p>
                                            <span>Total do Orçamento:</span> R${project.budget}
                                        </p>
                                        <p>
                                            <span>Total Utilizado:</span> R${project.cost}
                                        </p>
                                    </div>
                                ):(
                                    <div className="project_info">
                                        <ProjectForm
                                            handleSumbit={editPost}
                                            btnText="Concluir Edição"
                                            projectData={project}
                                        />
                                    </div>
                                )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}