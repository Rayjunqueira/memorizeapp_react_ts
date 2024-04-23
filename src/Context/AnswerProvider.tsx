import React, { useState } from "react";
import { AnswerContext } from "./AnswerContext";
import { QuestionType } from "../Types/QuestionType";

export const AnswerProvider = ({ children }: { children: JSX.Element }) => {
    const [thereIsQuestion, setThereIsQuestion] = useState<boolean | null>(null);

    const makeQuestions = (questionsAnswers: QuestionType[]) => {
        questionsAnswers.forEach(({ question, answer }) => {
            localStorage.setItem(question, answer);
        });
    };
    
    const randomQuestions = () => { 
        const keys = Object.keys(localStorage);
    
        if (keys.length === 0) {
            return "There are no questions registered";
        } else {
            let randomKey;
            do {
                const randomKeyIndex = Math.floor(Math.random() * keys.length);
                randomKey = keys[randomKeyIndex];
            } while (!randomKey); 
    
            return randomKey;
        }
    }

    const emptyQuestions = () => {
        localStorage.clear();
    }

    return (
        <AnswerContext.Provider value={{ makeQuestions, randomQuestions, thereIsQuestion, emptyQuestions }}>
            {children}
        </AnswerContext.Provider>
    );
};