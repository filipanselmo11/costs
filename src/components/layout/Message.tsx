
import { useEffect, useState } from 'react';
import './Message.css';

export interface MessageProps {
    type?: "success" | "error",
    msg: string
}

export default function Message(props: MessageProps) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!props.msg) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);

        return () => clearTimeout(timer);
    }, [props.msg])

    return (
        <>
            {visible && (
                <div className="message">
                    {props.type === 'success' && (
                        <span className="success">{props.msg}</span>
                    )}
                    {props.type === 'error' && (
                        <span className="error">
                            {props.msg}
                        </span>
                    )}
                </div>
            )}
        </>
    );
}