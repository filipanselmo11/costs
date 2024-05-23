import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import './Select.css';

export interface SelectProps {
    type?: HTMLInputTypeAttribute,
    text: string,
    name: string,
    options?: any,
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
                id={props.name}
                onChange={props.handleOnChange}
                value={props.value || ''}>
                    <option>Selecione uma opcao</option>
                    {props.options.map((opt)=> (
                        <option value={opt.id} key={opt.id}>
                            {opt.name}
                        </option>
                    ))}
                </select>
        </div>
    )
}