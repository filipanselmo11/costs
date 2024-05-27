import '../projects/ProjectCard.css';
import { BsFillTrashFill } from 'react-icons/bs';

export interface ServiceCardProps {
    id: any,
    name: any,
    cost: any,
    description: any,
    handleRemove: any
}

export default function ServiceCard (props: ServiceCardProps){
    const remove = (e) => {
        e.preventDefault()
        props.handleRemove(props.id, props.cost);
    }
    return(
        <div className="project_card">
            <h4>{props.name}</h4>
            <p>
                <span>Custom total:</span> R$ {props.cost}
            </p>
            <p>{props.description}</p>
            <div className="project_card_actions">
                <button onClick={remove}>
                    <BsFillTrashFill/>
                    Excluir
                </button>
            </div>
        </div>
    );
}