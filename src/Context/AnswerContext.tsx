import { createContext } from "react";
import { QuestionType } from "../Types/QuestionType";

export type AnswerContextType = {
    makeQuestions: (questionsAnswers: QuestionType[]) => void;
    randomQuestions: () => void;
    thereIsQuestion: boolean | null;
    emptyQuestions: () => void;
}

export const AnswerContext = createContext<AnswerContextType>(null!);