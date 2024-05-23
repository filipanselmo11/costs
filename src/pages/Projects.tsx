import Message from "../components/layout/Message";
import { useLocation } from "react-router-dom";
import './Project.css';
import Container from "../components/layout/Container";
import LinkButton from "../components/layout/LinkButton";

export default function Projects () {
    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state
    }
    return (
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to="/new-project" text="Criar Projeto"/>   
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}