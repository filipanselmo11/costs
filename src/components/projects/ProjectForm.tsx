import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.css';
import api from '../../api/api';

export interface ProjectFormProps {
    btnText: string,
    handleSumbit: any,
    projectData?: any,
}

export default function ProjectForm(props: ProjectFormProps) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(props.projectData || {})
    useEffect(() => {
        api.get("/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        props.handleSumbit(project)
    }

    const handleChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    }

    const handleSelect = (e) => {
        setProject({
            ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }
    return (
        <form onSubmit={submit} className="form">
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                handleOnChange={handleChange}
                placeholder="Insira o nome do projeto"
                value={project.name ? project.name : ''} />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                handleOnChange={handleChange}
                placeholder="Insira o orçamento total"
                value={project.budget ? project.budget : ''}/>
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleSelect}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={props.btnText} />
        </form>
    )
}