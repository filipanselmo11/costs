import { Link } from "react-router-dom";
import Container from './Container';
// import styles from './Navbar.css'
import './Navbar.css';
import logo from '../../assets/img/costs_logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs Logo" />
                </Link>
                <ul className="list">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className="item">
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className="item">
                        <Link to="/company">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}