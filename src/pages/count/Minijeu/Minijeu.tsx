import React, { useState } from "react";
import "../../../assets/css/minijeu/minijeu.css";
import OceanBg from "../../../assets/img/home/Preview_143.png";
import i1 from "../../../assets/circuit_marin/i1.png";
import i2 from "../../../assets/circuit_marin/i2.png";
import i3 from "../../../assets/circuit_marin/i3.png";
import i4 from "../../../assets/circuit_marin/i4.png";
import i5 from "../../../assets/circuit_marin/i5.png";
import i6 from "../../../assets/circuit_marin/i6.png";
import { Card } from "primereact/card";
import {useNavigate} from "react-router-dom";

import logo from "../../../assets/logo/logo-lyreco.png";

interface Cell {
  image: string;
  correctValue: number;
  currentValue: number;
}

interface CaseProps {
  image: string;
  correctValue: number;
  currentValue: number;
  onRotate: () => void;
}

function rand(): number {
  return Math.floor(Math.random() * 4);
}

const Case: React.FC<CaseProps> = ({
  image,
  // @ts-ignore
  correctValue,
  currentValue,
  onRotate,
}) => {
  const rotation: number = currentValue * 90; // Rotation calculée en fonction de l'état

  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: "#ddd",
        border: "1px solid #aaa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `rotate(${rotation}deg)`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={onRotate}
    >
      {/* Image avec rotation */}
      {image && (
        <img
          src={image}
          alt="Case"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

const Grid: React.FC = () => {

    const navigate = useNavigate();

  // Tableau de référence avec images et orientations correctes
  const referenceGrid: Cell[][] = [
    [
      { image: i1, correctValue: 1, currentValue: rand() },
      { image: i2, correctValue: 0, currentValue: rand() },
      { image: i1, correctValue: 2, currentValue: rand() },
      { image: i2, correctValue: 0, currentValue: rand() },
      { image: i1, correctValue: 2, currentValue: rand() },
    ],
    [
      { image: i2, correctValue: 3, currentValue: rand() },
      { image: i3, correctValue: 3, currentValue: rand() },
      { image: i3, correctValue: 1, currentValue: rand() },
      { image: i3, correctValue: 2, currentValue: rand() },
      { image: i1, correctValue: 1, currentValue: rand() },
    ],
    [
      { image: i2, correctValue: 1, currentValue: rand() },
      { image: i1, correctValue: 1, currentValue: rand() },
      { image: i4, correctValue: 3, currentValue: rand() },
      { image: i2, correctValue: 3, currentValue: rand() },
      { image: i3, correctValue: 3, currentValue: rand() },
    ],
    [
      { image: i3, correctValue: 0, currentValue: rand() },
      { image: i3, correctValue: 2, currentValue: rand() },
      { image: i3, correctValue: 0, currentValue: rand() },
      { image: i2, correctValue: 1, currentValue: rand() },
      { image: i1, correctValue: 1, currentValue: rand() },
    ],
    [
      { image: i1, correctValue: 3, currentValue: rand() },
      { image: i2, correctValue: 3, currentValue: rand() },
      { image: i2, correctValue: 2, currentValue: rand() },
      { image: i2, correctValue: 3, currentValue: rand() },
      { image: i2, correctValue: 2, currentValue: rand() },
    ],
  ];

  const [grid, setGrid] = useState<Cell[][]>(referenceGrid);

  // Fonction pour tourner une case
  const rotateCase = (x: number, y: number): void => {
    setGrid((prevGrid) => {
      const newGrid: Cell[][] = JSON.parse(JSON.stringify(prevGrid));
      newGrid[x][y] = {
        ...newGrid[x][y],
        currentValue: (newGrid[x][y].currentValue + 1) % 4,
      };
      return newGrid;
    });
  };

  // Vérification de la solution
  const checkSolution = (): void => {
    console.table(grid);
    const isSolved: boolean = grid.every((row, _) =>
      row.every((cell, _) => cell.correctValue === cell.currentValue)
    );
    if (isSolved) {
      alert("Bravo ! Circuit complet !");
      localStorage.setItem("heart", "1");
    } else {
      alert("Le circuit n'est pas encore correct.");
    }
  };

  const [egnim,setEgnim] = useState<string[]>([]);
  const [displayLogo,setDisplayLogo] = useState(false);

  function click(l:string){
      console.log(egnim);
      setEgnim(v=> {
          if (v.indexOf(l) == -1){
                  v.push(l);
                  if (v.length==6){
                      setDisplayLogo(true)
                  }
          }
          return v;
      })
  }

  return (
      <div style={{backgroundImage: `url(${OceanBg})`}}>
          <h1>Les courants marins sont complètements détraqués !</h1>
          <Card>
              <p>
                  Eh oui, si notre coeur humain assure <span className={
                      "clickable"} onClick={()=>click("l")}>l</span>a circulation du sang en
                  continu, distribuant de façon équitable les ressources de notre corps,
                  il en est de même pour l'océan Les <span className={"clickable"} onClick={()=>click("c")}>c</span>ourants marins sont tels nos
                  vaisseaux sanguins. Les <span className={"clickable"} onClick={()=>click("r")}>r</span>essources de l'océan transitent en
                  permanence
                  grâce eux S'ils disparaissent, c'est alors tout l'océan qui est en
                  danger. La chaine alimentaire d'en voit boulversée A vous de jou<span className={"clickable"} onClick={()=>click("e")}>e</span>r,
                  so<span className={"clickable"} onClick={()=>click("y")}>y</span>ez comme le coeur de l'océan, retablissez l'ordre dans ce véritbale
                  circuit maritime Indice : Il y a deux courants, ✖️ et ⏹️. Ils ne se
                  croisent jamais. Les ressources transp<span className={"clickable"} onClick={()=>click("o")}>o</span>rtées doivent atteindre toutes
                  les impasses
              </p>
          </Card>
          <div
              className="grid-container"
              style={{
                  border: "1px solid black",
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: `repeat(${referenceGrid[0].length}, 80px)`,
                  gap: "5px",
                  width: "fit-content",
              }}
          >
              <img
                  src={i5}
                  alt="i5"
                  style={{
                      position: "absolute",
                      top: "calc(80px * 2 + 8px * 2)", // Aligné avec la 3ème ligne
                      left: "-45px", // Hors de la grille à gauche
                      height: "80px",
                  }}
              />
              <img
                  src={i6}
                  alt="i6"
                  style={{
                      position: "absolute",
                      top: "calc(80px * 2 + 8px * 2)", // Aligné avec la 3ème ligne
                      right: "-48px", // Hors de la grille à droite
                      height: "80px",
                  }}
              />

              {grid.map((row, x) =>
                  row.map((cell, y) => (
                      <Case
                          key={`${x}-${y}`}
                          image={cell.image}
                          correctValue={cell.correctValue}
                          currentValue={cell.currentValue}
                          onRotate={() => rotateCase(x, y)}
                      />
                  ))
              )}
          </div>
          <button
              onClick={checkSolution}
              style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
              }}
          >
              Valider le circuit
          </button>
          <button style={{
              marginTop: "1em"
          }} onClick={() => navigate("/")}>
              ↩️ Go Home
          </button>
          <div className={"lLogo"} hidden={!displayLogo}>
              <img height={50} src={logo}/>
          </div>
      </div>
  );
};

export default Grid;
