import ProjectForm from '../components/projects/ProjectForm';
import './NewProject.css';

export default function NewProject() {
    return (
        <div className="new-project_container">
            <h1>
                Criar Projeto
            </h1>
            <p>
                Crie seu projeto para depois adicionar os serviços
            </p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}