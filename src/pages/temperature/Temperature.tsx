import "../../assets/css/temperature/temperature.css";
import {useEffect, useRef, useState} from "react";
import {TemperatureService} from "../../shared/services/TemperatureService.ts";
import drawJauge = TemperatureService.drawJauge;
import {Button} from "primereact/button";
import {Messages} from "primereact/messages";
import OceanBg from "../../assets/img/home/Preview_143.png";


export default function () {

    const msg = useRef(null);
    const [jauge, setJauge] = useState<number>(0.0);
    const fillRef = useRef<NodeJS.Timeout | null>(null);
    const [buttonLabel, setButtonLabel] = useState<string>("Arrêter");

    function startJaugeFill() {
        const canvas = document.getElementById("temperatureCanvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!!;

        const x = (ctx.canvas.width - 100) / 2;
        const y = (ctx.canvas.height - 200) / 2;

        if (jauge > 1.01) {
            setButtonLabel("Recommencer");
            // @ts-ignore
            msg.current.show({severity: 'error', summary: 'Game over', detail: 'Oh non ! Vous n\'avez pas réussi à réguler la température de l\'océan !'});
            clearInterval(fillRef.current!);
        } else {
            drawJauge(ctx, x, y, 100, 200, jauge);
            setJauge(prevJauge => prevJauge + 0.01);
        }
    }

    useEffect(() => {
        fillRef.current = setInterval(startJaugeFill, 50);
        return () => clearInterval(fillRef.current!);
    }, [jauge]);

    const restart = () => {
        setJauge(0.0);
        setButtonLabel("Arrêter");
        // @ts-ignore
        msg.current.clear();

        if (fillRef.current) {
            clearInterval(fillRef.current);
        }
        fillRef.current = setInterval(startJaugeFill, 50);
    }

    const interrupt = () => {
        if (fillRef.current) {

            if (jauge >= 0.8 && jauge <= 0.92) {
                // @ts-ignore
                msg.current.show({severity: 'success', summary: 'Bravo', detail: 'Vous avez réussi à réguler la température de l\'océan !'});
            } else {
                // @ts-ignore
                msg.current.show({severity: 'error', summary: 'Game over', detail: 'Oh non ! Vous n\'avez pas réussi à réguler la température de l\'océan !'});
            }

            clearInterval(fillRef.current);
            fillRef.current = null;
            setButtonLabel("Recommencer");
        }
    };

    const manageClick = () => {
        // @ts-ignore
        msg.current.clear()
        if (jauge >= 1 || fillRef.current === null) {
            restart();
        } else {
            interrupt();
        }
    }

    return (
        <div className={"temperature"} style={{backgroundImage: `url(${OceanBg})`}}>
            <Messages ref={msg} />
            <canvas id={"temperatureCanvas"} width={800} height={800} />
            <Button onClick={manageClick} label={buttonLabel} />
        </div>
    )
}