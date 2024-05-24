import Message from "../components/layout/Message";
import { useLocation } from "react-router-dom";
import './Project.css';
import Container from "../components/layout/Container";
import LinkButton from "../components/layout/LinkButton";
import { useState, useEffect } from "react";
import api from "../api/api";
import ProjectCard from "../components/projects/ProjectCard";
import Loading from "../components/layout/Loading";

// export default interface ProjectInterface {
//     id: string,
//     name: string,
//     category: string,
//     budget: string
// }

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state
    }

    useEffect(() => {
        setTimeout(() => {
            api.get("/projects")
                .then((res) => {
                    setProjects(res.data)
                    setLoading(true)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [])

    return (
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to="/new-project" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        key={project.id}
                    />
                ))}
                {!loading && <Loading />}
                {loading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}