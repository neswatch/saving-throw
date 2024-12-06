import {Button} from "primereact/button";
import "../../assets/css/home/step.css"
import {useEffect, useState} from "react";
import {JSX} from "react";
import ShipImage from "../../assets/img/home/feu1-images-pixel.png"

interface StepProps {
    orientation: "UP" | "DOWN" | "LEFT" | "RIGHT" | "HIDDEN";
    severity: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'contrast';
    children: string
    id?: string
    className?: string
    onClick?: () => void
    onShipClick?: ()=>void
    disabled?:boolean
}

export default function (props: StepProps) {

    const [ship, setShip] = useState<JSX.Element>(<></>)

    useEffect(() => {
        let rotation: number;
        switch (props.orientation) {
            case "UP":
                rotation = -90;
                break;
            case "DOWN":
                rotation = 90;
                break;
            case "LEFT":
                rotation = 180;
                break;
            case "RIGHT":
            default:
                rotation = 0;
                break;
        }

        if (props.orientation && props.orientation!="HIDDEN") {
            setShip(
                <img
                    onClick={props.onShipClick}
                    src={ShipImage}
                    alt="Ship"
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            );
        }
    }, [])

    return (
        <article id={props.id} className={`${props.className||""} step`}>
            {ship}
            <Button label={props.children} severity={props.severity} onClick={props.onClick} disabled={props.disabled}/>
        </article>
    )
}