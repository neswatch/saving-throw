import {Button} from "primereact/button";
import "../../assets/css/home/step.css"

interface StepProps {
    orientation: "UP" | "DOWN" | "LEFT" | "RIGHT" | "HIDDEN";
    severity: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'contrast';
    children: string
    id?: string
    className?: string
}

export default function (props: StepProps) {

    // TODO: Implement the Step component

    return (
        <article id={props.id} className={`${props.className} step`}>
            <Button label={props.children} severity={props.severity} />
        </article>
    )
}