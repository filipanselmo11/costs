import Message from "../components/layout/Message";
import { useLocation } from "react-router-dom";

export default function Projects () {
    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state
    }
    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    )
}