import Case from "./case/case.tsx";
import {useEffect, useState} from "react";
import "./poumon.css";

import OceanBg from "../../assets/img/home/Preview_143.png";
import logo from "../../assets/logo/logo-lyreco.png";
import {useNavigate} from "react-router-dom";
import {ProgressBar} from "primereact/progressbar";

export default function Poumon() {
    const [grille, setGrille] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const [vaiseauPos, setVaiseauPos] = useState(0);
    const [win, setWin] = useState(false);

    const [lastEmpty, setLastEmpty] = useState(0);
    const [loos, setLoos] = useState(false);

    const [progression, setProgression] = useState(0);

    const navigate = useNavigate();

    function makeMove(direction: number) {
        setVaiseauPos((value) => value + direction);
    }

    function decalvalue(oldGrille: number[][]): number[][] {
        const newValue = oldGrille.slice(1);
        if (oldGrille[0][vaiseauPos] > 0) {
            setLoos(true);
            setProgression(0);
            return oldGrille;
        }
        setProgression((v) => v + 1);
        if (progression > 100) {
            iswin();
        }
        if (
            (newValue[5][0] > 0 && newValue[6][1] > 0 && newValue[6][2] > 0) ||
            (newValue[5][1] > 0 && newValue[6][0] > 0 && newValue[6][2] > 0) ||
            (newValue[5][2] > 0 && newValue[6][0] > 0 && newValue[6][1] > 0) ||
            lastEmpty >= 3
        ) {
            newValue.push([0, 0, 0]);
            setLastEmpty(0);
            return newValue;
        }
        const img = 1 + Math.floor(Math.random() * 3);
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                newValue.push([img, 0, 0]);
                setLastEmpty((v) => v + 1);
                return newValue;
            case 1:
                newValue.push([0, img, 0]);
                setLastEmpty((v) => v + 1);
                return newValue;
            case 2:
                newValue.push([0, 0, img]);
                setLastEmpty((v) => v + 1);
                return newValue;
            default:
                setLastEmpty(0);
                newValue.push([0, 0, 0]);
                return newValue;
        }
    }

    function newLigne() {
        setGrille((value) => decalvalue(value));
    }

    function getRaw(value: number[]) {
        return (
            <tr>
                <td>
                    <Case state={value[0]}></Case>
                </td>
                <td className={"centreCell"}>
                    <Case state={value[1]}></Case>
                </td>
                <td>
                    <Case state={value[2]}></Case>
                </td>
            </tr>
        );
    }

    function iswin() {
        localStorage.setItem("poumon", "1");
        setWin(true);
    }

    useEffect(() => {


        return () => {

        }
    }, []);

    useEffect(() => {
        const interval = setInterval(newLigne, 500);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.repeat) return
            console.log(event.key, vaiseauPos)
            if (event.key === "ArrowLeft" && !(vaiseauPos == 0 || grille[0][vaiseauPos] > 0)) {
                makeMove(-1);
            } else if (event.key === "ArrowRight" && !(vaiseauPos == 2 || grille[0][vaiseauPos] > 0)) {
                makeMove(1);
            }
        }

        window.addEventListener("keyup", handleKeyDown);

        //Clearing the interval
        return () => {
            clearInterval(interval);
            window.removeEventListener("keyup", handleKeyDown);
        }
    }, [grille, newLigne]);

    function restart() {
        setGrille([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);

        setLoos(false);
    }

    return (
        <div className="poumon" style={{backgroundImage: `url(${OceanBg})`}}>
            <h1>Sauvez les planctons !! Le poumon bleu des océans</h1>
            <p>
                Cela peut sembler complètement dingue, et pourtant je vous l'assure !
                L'océan respire ! Si nos poumons nous permettent d'assimiler le précieux
                oxygène autour de nous, l'océan, lui, en produit avec le sien grâce aux
                planctons. Les planctons à la surface de l'eau sont aussi fascinants
                qu'ils sont petits. Ces micro-organismes se nourrissent de CO2 et
                relâchent en échange de l'O2 dans notre air et dans l'océan. Ainsi ils
                sont le socle de la chaine alimentaire et enrichissent notre air.
                Cependant ils sont vulnérables, la pollution des eaux et la surpêche
                représentent un véritable enjeu écologique pour le monde entier.
            </p>
            <p>
                Un petit plancton a embarqué dans notre vaisseau nous devons le rammener
                à sa famille, évitez la pollution, et la pêche pour la rejoindre.
            </p>
            <div className="card">
                <table className={"table-collapse"}>
                    {getRaw(grille[7])}
                    {getRaw(grille[6])}
                    {getRaw(grille[5])}
                    {getRaw(grille[4])}
                    {getRaw(grille[3])}
                    {getRaw(grille[2])}
                    {getRaw(grille[1])}
                    <tr>
                        <td>
                            <Case vaiseau={vaiseauPos == 0} state={grille[0][0]}></Case>
                        </td>
                        <td className={"centreCell"}>
                            <Case vaiseau={vaiseauPos == 1} state={grille[0][1]}></Case>
                        </td>
                        <td>
                            <Case vaiseau={vaiseauPos == 2} state={grille[0][2]}></Case>
                        </td>
                    </tr>
                </table>
                <ProgressBar value={progression} showValue={false}/>
                {progression > 150 ? <img height={50} src={logo}/> : ""}
                <div className={"f-center"}>
                    <button
                        className={"xlarge"}
                        onClick={() => makeMove(-1)}
                        disabled={vaiseauPos == 0 || grille[0][vaiseauPos] > 0}
                    >
                        ◀️
                    </button>
                    <button
                        className={"xlarge"}
                        onClick={() => restart()}
                        disabled={!loos}
                    >
                        🔄️
                    </button>
                    <button
                        className={"xlarge"}
                        onClick={() => makeMove(1)}
                        disabled={vaiseauPos == 2 || grille[0][vaiseauPos] > 0}
                    >
                        ▶️
                    </button>
                </div>
                {loos ? (
                    win ? (
                        <p> Tu as sauvé le plancton !! </p>
                    ) : (
                        <p>Perdu !!</p>
                    )
                ) : progression > 100 ? (
                    <p> C'est bon ton défi est validé ! </p>
                ) : (
                    <p>Survis le plus longtemps possible</p>
                )}
                <div className={"btnNav"}>
                    <button onClick={() => navigate("/")}>↩️ Go Home</button>
                    {win ? <button onClick={() => navigate("/mj")}>Next ➡️</button> : ""}
                </div>
            </div>
        </div>
    );
}
