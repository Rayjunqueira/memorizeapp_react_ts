import * as C from './styles';

import { AnswerContext } from '../../Context/AnswerContext';
import { useContext, useEffect, useState } from 'react';
import { QuestionType } from '../../Types/QuestionType';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Dashboard = (props: Props) => {
  const answerCtx = useContext(AnswerContext);
  const navigate = useNavigate();

  const [question, setQuestion] = useState<string>(""); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [answer, setAnswer] = useState<string>("");
  const [questionsAnswers, setQuestionsAnswers] = useState<QuestionType[]>([]);
  const [error, setError] = useState<string>("");

  const thereQuestionsAlready = async () => {
    setIsLoading(true);
    const questionResponse = await answerCtx.randomQuestions();

    if (typeof questionResponse === 'string') {
      if (questionResponse === "There are no questions registered") {
        setIsLoading(false);
      } else {
        navigate("/questions");
      } 
    }
  }

  useEffect(() => {
    thereQuestionsAlready();
  }, []); 

  const handleAnswerStorage = () => {
    if (question.trim() !== "" && answer.trim() !== "") {
      setQuestionsAnswers(prevState => [
        ...prevState,
        { question, answer }
      ]);
      setQuestion("");
      setAnswer("");
      setError("");
    } else {
      setError("Please enter both question and answer.");
    }
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestionsAnswers(prevState => {
      const updatedQuestions = [...prevState];
      updatedQuestions.splice(index, 1);
      return updatedQuestions;
    });
  }

  const handleRegister = async () => {
    if (questionsAnswers.length > 0) {
        await answerCtx.makeQuestions(questionsAnswers);
        navigate("/questions");
    } else {
        setError("Please enter a question before registering.");
    }
  }

  return (
    <C.Container>
        <C.DashTitle>
            <h3>Enter the phrases or words you want to memorize!</h3>
        </C.DashTitle>
        <C.InputContainer>
            <h4>Question</h4>
            <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder='Type your question!'></textarea>
            <h4>Answer</h4>
            <textarea value={answer} onChange={e => setAnswer(e.target.value)} placeholder='Type your answer!'></textarea>
        </C.InputContainer>     
        <C.ButtonContainer>
            <button onClick={handleAnswerStorage}>Add</button>
        </C.ButtonContainer>
        <C.CurrentlyQuestions>
            {questionsAnswers.map((qa, index) => (
                <C.ListQuestion key={index}>
                    <C.Question>
                        <p>{qa.question}</p>
                    </C.Question>
                    <C.Remove>
                        <i onClick={() => handleDeleteQuestion(index)}><DeleteIcon id='remove_icon'/></i>
                    </C.Remove>
                </C.ListQuestion>
            ))}
        </C.CurrentlyQuestions> 
        <C.ButtonRegister>
            <button onClick={handleRegister}>Register</button>
        </C.ButtonRegister>
    </C.Container>
  )
}

export default Dashboard;