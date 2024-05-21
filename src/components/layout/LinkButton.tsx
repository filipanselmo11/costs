import { Link } from 'react-router-dom';
import './LinkButton.css';

export interface LinkButtonProps {
    to: string,
    text: string
}

export default function LinkButton(props: LinkButtonProps){
    return (
        <Link className="btn" to={props.to}>
            {props.text}
        </Link>
    )
}