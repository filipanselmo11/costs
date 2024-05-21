import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.css';

export interface ProjectFormProps {
    btnText: string
}

export default function ProjectForm(props: ProjectFormProps) {
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
            />
            <SubmitButton text={props.btnText} />
        </form>
    )
}