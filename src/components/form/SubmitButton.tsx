import './SubmitButton.css';

export interface SubmitButtonProps {
    text: string,
}

export default function SubmitButton(props: SubmitButtonProps) {
    return(
        <div>
            <button className="btn">
                {props.text}
            </button>
        </div>
    )
}