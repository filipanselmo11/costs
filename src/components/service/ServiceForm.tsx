import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import '../projects/ProjectForm.css';

export interface ServiceFormProps {
    handleSubmit?: any,
    btnText: string,
    projectData?: any,
}

export default function ServiceForm(props : ServiceFormProps) {

    const [service, setService] = useState({});

    const submit = (e) => {
        e.preventDefault();
        props.projectData.services.push(service); 
        props.handleSubmit(props.projectData);
    }
    const handleChange = (e) => {
        setService({...service, [e.target.name]: e.target.value});
    }
    return (
        <form onSubmit={submit} className="form">
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={props.btnText}/>
        </form>
    )
}