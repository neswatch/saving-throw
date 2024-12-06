
import Case from "./case/case.tsx";
import {useEffect, useState} from "react";
import "./poumon.css"

import OceanBg from "../../assets/img/home/Preview_143.png"
import {useNavigate} from "react-router-dom";

export default function Poumon() {


    const [grille, setGrille] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ])
    const [vaiseauPos, setVaiseauPos] = useState(0);

    const [lastEmpty, setLastEmpty] = useState(0);
    const [loos, setLoos] = useState(false);

    const navigate = useNavigate();

    function makeMove(direction:number){
        setVaiseauPos((value)=>value+direction)
    }


    function decalvalue(oldGrille: number[][]): number[][]{
        const newValue = oldGrille.slice(1);
        if (oldGrille[0][vaiseauPos]>0){
            setLoos(true)
            return oldGrille
        }
        if (
            (newValue[5][0]>0 && (newValue[6][1]>0 && newValue[6][2]>0))
            || (newValue[5][1]>0 && (newValue[6][0]>0 && newValue[6][2]>0))
            || (newValue[5][2]>0 && (newValue[6][0]>0 && newValue[6][1]>0))
            || lastEmpty >= 3
        ){
            newValue.push([0,0,0])
            setLastEmpty(0)
            return newValue;
        }
        const img = 1+Math.floor(Math.random() * 3);
        switch (Math.floor(Math.random() * 4)){
            case 0:
                newValue.push([img,0,0])
                setLastEmpty(v=>v+1);
                return newValue;
            case 1:
                newValue.push([0,img,0])
                setLastEmpty(v=>v+1);
                return newValue;
            case 2:
                newValue.push([0,0,img])
                setLastEmpty(v=>v+1);
                return newValue;
            default:
                setLastEmpty(0);
                newValue.push([0,0,0])
                return newValue;
        }
    }

    function newLigne(){
        setGrille((value)=>decalvalue(value))
    }


    function getRaw(value: number[]) {
        return <tr>
            <td>
                <Case state={value[0]}></Case>
            </td>
            <td className={"centreCell"}>
                <Case state={value[1]} ></Case>
            </td>
            <td>
                <Case state={value[2]}></Case>
            </td>
        </tr>
    }


    useEffect(() => {
        const interval = setInterval(
            newLigne, 500);
        //Clearing the interval
        return () => clearInterval(interval);
        }
        , [grille,newLigne]);

    function restart() {
        setGrille([
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0]])

        setLoos(false)
    }

    return (
        <div className="poumon" style={{backgroundImage: `url(${OceanBg})`}}>

            <div className="card" >
                <table className={"table-collapse"}>
                    {getRaw(grille[7])}
                    {getRaw(grille[6])}
                    {getRaw(grille[5])}
                    {getRaw(grille[4])}
                    {getRaw(grille[3])}
                    {getRaw(grille[2])}
                    {getRaw(grille[1])}
                    <tr>
                        <td >
                            <Case vaiseau={vaiseauPos == 0} state={grille[0][0]}></Case>
                        </td>
                        <td className={"centreCell"} >
                            <Case vaiseau={vaiseauPos == 1} state={grille[0][1]}></Case>
                        </td>
                        <td>
                            <Case vaiseau={vaiseauPos == 2} state={grille[0][2]}></Case>
                        </td>

                    </tr>
                </table>

                <div style={{"display": "flex"}}>
                    <button className={"xlarge"} onClick={() => makeMove(-1)} disabled={vaiseauPos == 0 || (grille[0][vaiseauPos] > 0)}>◀️
                    </button>
                    <button className={"xlarge"} onClick={() => restart()} disabled={!loos}>🔄️</button>
                    <button className={"xlarge"} onClick={() => makeMove(1)} disabled={vaiseauPos == 2 || (grille[0][vaiseauPos] > 0)}>▶️
                    </button>
                </div>
                {loos? <p>Perdu !!</p>: <p>Survie le plus longtemps</p>}
                <button onClick={()=>navigate("/")}>↩️Go Home</button>
            </div>
        </div>
    )
}