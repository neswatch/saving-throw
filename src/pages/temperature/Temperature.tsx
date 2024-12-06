import OceanBg from "../../assets/img/home/Preview_143.png";
import "../../assets/css/temperature/temperature.css"
import {Card} from "primereact/card";
import {useEffect, useRef, useState} from "react";
import {QuizData} from "../../shared/model/QuizData.ts";
import {QuizService} from "../../shared/service/QuizService.ts";
import {Messages} from "primereact/messages";
import {useNavigate} from "react-router-dom";

export default function () {

    const msg = useRef(null);
    const navigate = useNavigate();

    const [quizData, setQuizData] = useState<Array<QuizData>>(QuizService.getAll())
    const [selectedResponse, setSelectedResponse] = useState<string>("")

    useEffect(() => {
        setQuizData(QuizService.getAll())
    }, [])

    useEffect(() => {
        if (selectedResponse !== "") {
            const response = quizData.find(elt => elt.reponses.find(rep => rep.contenu === selectedResponse))
            if (response) {
                // @ts-ignore
                msg.current.clear()
                const correctResponse = response.reponses.find(rep => rep.correcte)
                if (correctResponse && correctResponse.contenu === selectedResponse) {
                    localStorage.setItem("temp", "1");
                    // @ts-ignore
                    msg.current.show({severity: 'success', summary: 'Bonne réponse', detail: 'Vous avez bien répondu à la question'})
                } else {
                    // @ts-ignore
                    msg.current.show({severity: 'error', summary: 'Mauvaise réponse', detail: 'Essayez encore'})
                }
            }
        }
    }, [selectedResponse]);

    return (
        <div className={"temperature"} style={{backgroundImage: `url(${OceanBg})`}}>
            <Card>
                <h1> 🌡️ Gestion de la température 🌡️ </h1>
                <hr/>
                {quizData.map((elt, quizIndex) => {
                    return (
                        <div key={`${quizIndex}`}>
                            <p>{elt.introduction}</p>
                            <strong>{elt.question}</strong>
                            <article className={"question"}>
                                {elt.reponses.map((response, repIndex) => {
                                    return (
                                        <section key={`question-${quizIndex}-${repIndex}`}
                                                 className={"flex align-items-center"}>
                                            <input
                                                type={"radio"}
                                                id={`${quizIndex}-${repIndex}`}
                                                value={response.contenu}
                                                checked={selectedResponse === response.contenu}
                                                onChange={() => setSelectedResponse(response.contenu)}
                                            />
                                            <label htmlFor={`${quizIndex}-${repIndex}`}>{response.contenu}</label>
                                        </section>
                                    )
                                })}
                            </article>
                        </div>
                    )
                })}
                <hr/>
                <Messages ref={msg}/>
                <button style={{
                    marginTop: "1em"
                }} onClick={() => navigate("/")}>
                    ↩️ Go Home
                </button>
            </Card>
        </div>
    )
}