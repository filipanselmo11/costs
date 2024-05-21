import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import './Input.css';

export interface InputProps {
    type: HTMLInputTypeAttribute,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange?: ChangeEventHandler,
    value?: string
}

export default function Input(props: InputProps) {
    return(
        <div className="form_control">
            <label htmlFor={props.name}>
                {props.text}:
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
                value={props.value}/>
        </div>
    )
}