import './ProjectCard.css';
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
export interface ProjectCardProps {
    id: any,
    name: any,
    budget: any,
    category: 'Infra' | 'Desenvolvimento' | 'Design' | 'Planejamento',
    handleRemove?: any
}

export default function ProjectCard(props: ProjectCardProps) {

    const remove = (e) => {
        e.preventDefault();
        props.handleRemove(props.id);
    }

    return (
        <div className="project_card">
            <h4>
                {props.name}
            </h4>
            <p>
                <span>
                    Orçamento: R$ {props.budget}
                </span>
            </p>
            <p className="category_text">
                {props.category === 'Infra' && (
                    <span>{props.category}</span>
                )}
                {props.category === 'Desenvolvimento' && (
                    <span>{props.category}</span>
                )}
                {props.category === 'Design' && (
                    <span>{props.category}</span>
                )}
                {props.category === 'Planejamento' && (
                    <span>{props.category}</span>
                )}
            </p>
            <div className="project_card_actions">
                <Link to={`/project/${props.id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    );
}