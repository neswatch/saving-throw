import {QuizData} from "../model/QuizData.ts";
import QuizContent from "../../../data/temperature/quizz.json"

export namespace QuizService {

    // @ts-ignore
    const quizData: QuizData[] = QuizContent

    export function getAll(): QuizData[] {
        return quizData
    }

}