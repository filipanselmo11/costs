import './Loading.css';
import loading from '../../assets/img/loading.svg';

export default function Loading() {
    return (
        <div className="loader_container">
            <img className="loader" src={loading} alt="Loading"/>
        </div>
    );
}