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
                    <span className="infra">{props.category}</span>
                )}
                {props.category === 'Desenvolvimento' && (
                    <span className="desenvolvimento">{props.category}</span>
                )}
                {props.category === 'Design' && (
                    <span className="design">{props.category}</span>
                )}
                {props.category === 'Planejamento' && (
                    <span className="planejamento">{props.category}</span>
                )}
            </p>
            <div className="project_card_actions">
                <Link to="/">
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    );
}