import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import { AnswerContext } from '../../Context/AnswerContext';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Questions = (props: Props) => {
  const answerCtx = useContext(AnswerContext);
  const navigate = useNavigate();

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showBackButton, setShowBackButton] = useState<boolean>(true);
  const [showTextArea, setShowTextArea] = useState<boolean>(true);

  const showRandomQuestion = async () => {
    setIsLoading(true);
    const questionResponse = await answerCtx.randomQuestions();

    if (typeof questionResponse === 'string') {
      if (questionResponse === "There are no questions registered") {
        setIsLoading(false);
        setShowTextArea(false);
        setShowNextButton(false); 
        setShowBackButton(true);
      } else {
        setIsLoading(false);
        setQuestion(questionResponse);
        setShowTextArea(true);
        setShowNextButton(true);
        setShowBackButton(false);
      }
    }
  }

  useEffect(() => {
    showRandomQuestion();
  }, []); 
  const verifyAnswer = () => {
    const getAnswer = localStorage.getItem(question);
  
    let trimmedAnswer = "";
  
    if (getAnswer != null) {
      trimmedAnswer = getAnswer.trim();
      setAnswer(trimmedAnswer);
    }
  
    const trimmedUserAnswer = userAnswer.trim();
  
    const normalizedAnswer = trimmedAnswer.toLocaleLowerCase();
    const normalizedUserAnswer = trimmedUserAnswer.toLocaleLowerCase();
  
    if (normalizedUserAnswer === normalizedAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  
    setShowAnswer(true);
    setShowNextButton(true);
    setIsAnswered(true);
  }    
  const handleNext = () => {
    setUserAnswer("");
    setShowAnswer(false);
    setShowNextButton(false);
    setQuestion("");
    setIsAnswered(false);
    showRandomQuestion();
  }

  const handleBackDash = () => {
    navigate("/dashboard");
  }

  const handleEmptyQuestions = async () => {
    const clearQuestions = await answerCtx.emptyQuestions();
    navigate("/dashboard");
  }

  return (
    <C.Container>
      <C.QuestionContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h4>{question}</h4>
            {showAnswer && (
              <>
                {isCorrect ? (
                  <C.CorrectAnswer>
                    <h4>{answer}</h4>
                  </C.CorrectAnswer>
                ) : (
                  <C.IncorrectAnswer>
                    <h4>{answer}</h4>
                  </C.IncorrectAnswer>
                )}
              </>
            )}
            {showTextArea && (
              <textarea
                placeholder='Your answer'
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
              ></textarea>
            )}
          </>
        )}
      </C.QuestionContainer>
      {!isAnswered && !showBackButton && (
        <C.SendButton>
          <button onClick={verifyAnswer}>Send answer</button>
        </C.SendButton>
      )}
      {showBackButton && (
        <C.NoQuestionButton>
          <h4>There are no questions registered</h4>
          <button onClick={handleBackDash}>Back to dashboard</button>
        </C.NoQuestionButton>
      )}
      {isAnswered && (
        <C.Correction>
          {isCorrect ? <C.CorrectText>That's correct. Congratulations!</C.CorrectText> : <C.IncorrectText>You're wrong!</C.IncorrectText>}
        </C.Correction>
      )}
      {showNextButton && (
        <C.NextButton>
          <button onClick={handleNext}>Next</button>
        </C.NextButton>
      )}
      {showNextButton && (
        <C.EmptyButton>
          <button onClick={handleEmptyQuestions}>Empty questions</button>
        </C.EmptyButton>
      )}
    </C.Container>
  )
}

export default Questions;
