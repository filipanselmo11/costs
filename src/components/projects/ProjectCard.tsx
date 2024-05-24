import './ProjectCard.css';
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
export interface ProjectCardProps {
    id: any,
    name: any,
    budget: any,
    category: 'infra' | 'desenvolvimento' | 'design' | 'planejamento',
    handleRemove?: any
}

export default function ProjectCard(props: ProjectCardProps) {
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
                {props.category === 'infra' && (
                    <span className="infra">{props.category}</span>
                )}
                {props.category === 'desenvolvimento' && (
                    <span className="desenvolvimento">{props.category}</span>
                )}
                {props.category === 'design' && (
                    <span className="design">{props.category}</span>
                )}
                {props.category === 'planejamento' && (
                    <span className="planejamento">{props.category}</span>
                )}
            </p>
            <div className="project_card_actions">
                <Link to="/">
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    );
}