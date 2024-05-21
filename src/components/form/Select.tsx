import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import './Select.css';

export interface SelectProps {
    type?: HTMLInputTypeAttribute,
    text: string,
    name: string,
    options?: HTMLOptionElement,
    handleOnChange?: ChangeEventHandler,
    value?: string
}

export default function Select(props: SelectProps) {
    return(
        <div className="form_control">
            <label htmlFor={props.name}>
                {props.text}:
            </label>
            <select
                name={props.name}
                id={props.name}>
                    <option>Selecione uma opcao</option>
                </select>
        </div>
    )
}