interface Reponse {
    contenu: string,
    correcte: boolean
}

export interface QuizData {
    introduction: string,
    question: string,
    reponses: Reponse[]
}