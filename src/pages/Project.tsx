
import { useParams } from 'react-router-dom';
import './Project.css';
import { useEffect, useState } from 'react';
import api from '../api/api';
import Loading from '../components/layout/Loading';
import Container from '../components/layout/Container';
import ProjectForm from '../components/projects/ProjectForm';
import Message from '../components/layout/Message';
import ServiceForm from '../components/service/ServiceForm';
import {v4 as uuidv4 } from "uuid";
import axios from 'axios';
import ServiceCard from '../components/service/ServiceCard';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {
            api.get(`/projects/${id}`)
                .then((res) => {
                    setProject(res.data);
                    setServices(res.data.services)
                })
                .catch((err) => console.log(err))
        }, 2000)
    }, [id])
    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    }
    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm);
    }

    const createService = (project) => {
        setMessage("");
        // Pegar o ultimo servico
        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);
        if (newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado, verifique o valor do serviço");
            setTypeMessage("error");
            project.services.pop();
            return false;
        }
        project.cost = newCost;
        axios.patch(`/projects/${project.id}`)
            .then(() => setShowServiceForm(false))
            .catch((err) => console.log(err));
    }
    const editPost = (project) => {
        setMessage("");
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
    const removeService = (id, cost) => {
        const serviceUpdate = projects.services.filter((service) => service.id !== id)
        const projectUpdated = project;
        projectUpdated.services = serviceUpdate;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);
        const body = JSON.stringify(projectUpdated);
        axios.patch(`/projects/${projectUpdated.id}`, body)
            .then((res) => {
                setProject(res.data);
                setServices(serviceUpdate);
                setMessage("Serviço removido com sucesso");
                setTypeMessage("success");
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            {project.name ? (
                <div className="project_details">
                    <Container customClass="column">
                        {message && <Message type={typeMessage} msg={message} />}
                        <div className="details_container">
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className="btn"
                                onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
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
                            ) : (
                                <div className="project_info">
                                    <ProjectForm
                                        handleSumbit={editPost}
                                        btnText="Concluir Edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="service_form_container">
                            <h2>
                                Adicione um serviço
                            </h2>
                            <button
                                className="btn"
                                onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            <div className="project_info">
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Adicionar Serviço"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 && services.map((service) => (
                                <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                    />
                            ))}
                            {services.length === 0 && <p>Não há serviços cadastrados</p>}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}