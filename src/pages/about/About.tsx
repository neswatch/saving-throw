import OceanBg from "../../assets/img/home/Preview_143.png";
import "../../assets/css/about/about.css"
import {Card} from "primereact/card";

export default function () {

    return (
        <div className={"about"} style={{backgroundImage: `url(${OceanBg})`}}>
            <Card>
                <h1>À propos</h1>
                <p>
                    Ce site a été réalisé dans le cadre de la Nuit de l'Info 2024 par l'équipe 🔥 Cast a Fireball 🔥.
                </p>
                <p>
                    L'objectif de ce site est de montrer les parrallèles entre les systèmes humains et les systèmes
                    océaniques. Cette
                    transmission de connaissances est réalisée grâce à la gamification à travers des défis et des quizz.
                </p>

                <h2>Technologies utilisées</h2>
                <p>Le code a été réalise à l'aide du framework React en TypeScript</p>
                <p><a href={"https://github.com/neswatch/saving-throw.git"}>https://github.com/neswatch/saving-throw.git</a></p>

                <h2>Collaborateurs</h2>
                <ul>
                    <li></li>
                    <li>Romane Malherbe</li>
                    <li>Enzo Calleya</li>
                    <li>Julien Linget</li>
                </ul>
            </Card>
        </div>
    )
}