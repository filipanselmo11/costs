import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.css';
import api from '../../api/api';

export interface ProjectFormProps {
    btnText: string
}

export default function ProjectForm(props: ProjectFormProps) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        api.get("/categories")
            .then((res) => {
                console.log(res);
                setCategories(res.data);
            })
            .catch((err) => console.log(err))
    },[])
    return (
        <form className="form">
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto" />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total" />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
            />
            <SubmitButton text={props.btnText} />
        </form>
    )
}