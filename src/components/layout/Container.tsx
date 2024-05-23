import { ReactElement } from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
    children: ReactElement | any,
    customClass?: any,
}

export default function Container(props: ContainerProps) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children} 
        {/* <ng-content></ng-content> */}
    </div>
}