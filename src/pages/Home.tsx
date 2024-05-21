import './Home.css';
import savings from '../../src/assets/img/savings.svg'
import LinkButton from '../components/layout/LinkButton';
export default function Home() {
    return (
        <section className="home_container">
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>
                Comece a gerenciar os seus projetos agora mesmo
            </p>
            <LinkButton to="/new-project" text="Criar Projeto"/>
            {/* <a href="/">Criar Projeto</a> */}
            <img src={savings} alt="COSTS"/>
        </section>
    )
}