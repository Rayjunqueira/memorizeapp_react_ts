import styled from "styled-components";

export const Container = styled.div `

`;

export const QuestionContainer = styled.div `
    text-align: center;
    margin: 0 3vh;

    h4 {
        font-size: 1.6vh;
        color: #fff;
        max-width: 90%; 
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    textarea {
        margin-top: -1.8vh;
        width: 90%;
        height: 16vh;
        border-radius: 5px;
        outline: none;
        background-color: #d9d9d9;
        margin-top: 3vh;
    }

    @media (max-height: 882px) and (min-width: 400px) {
        h4 {
            font-size: 4.7vh;
            color: #fff;
            max-width: 90%; 
            overflow: hidden; 
            text-overflow: ellipsis;
        }

        textarea {
            margin-top: -1.8vh;
            width: 90%;
            height: 28vh;
            border-radius: 5px;
            outline: none;
            background-color: #d9d9d9;
            margin-top: 3vh;
        }
    }
`;

export const CorrectAnswer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #00BB61;
    border-radius: 3px;
    height: auto; 
    margin-bottom: 4vh;
    margin: 0 1.5vh;
    
    h4 {
        color: #fff;
        word-wrap: break-word; 
        max-width: 90%; 
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    @media (max-height: 882px) and (min-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #00BB61;
        border-radius: 3px;
        height: auto; 
        margin-bottom: 4vh;
        margin: 0 5vh;

        h4 {
            color: #fff;
            word-wrap: break-word; 
            max-width: 90%; 
            overflow: hidden; 
            text-overflow: ellipsis;
            font-size: 4.4vh;
        }
    }
`;

export const IncorrectAnswer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ff5757;
    border-radius: 3px;
    height: auto; 
    margin-bottom: 4vh;
    margin: 0 1.5vh;

    h4 {
        color: #fff;
        word-wrap: break-word; 
        max-width: 90%; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }

    @media (max-height: 882px) and (min-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #ff5757;;
        border-radius: 3px;
        height: auto; 
        margin-bottom: 4vh;
        margin: 0 5vh;

        h4 {
            color: #fff;
            word-wrap: break-word; 
            max-width: 90%; 
            overflow: hidden; 
            text-overflow: ellipsis;
            font-size: 4.4vh;
        }
    }
`;

export const SendButton = styled.div `
    text-align: center;
    margin-top: 2vh;

    button {
        background-color: #00BB61;
        color: #fff;
        width: 28%;
        height: 4.2vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        button {
            width: 150px; 
            margin-left: auto;
            margin-right: auto; 
        }
    }


    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #00BB61;
            color: #fff;
            width: 16%;
            height: 8vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
        }
    }
`;

export const NoQuestionButton = styled.div `
    text-align: center;
    margin-top: 28vh;

    h4 {
        color: #fff;
        font-size: 3.vh;
    }

    button {
        background-color: #ff914d;
        color: #fff;
        width: 36%;
        height: 5vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        button {
            width: 150px;
            margin-left: auto;
            margin-right: auto; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #ff914d;
            color: #fff;
            width: 24%;
            height: 8.6vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
        }    
    }

`;

export const NextButton = styled.div `
    text-align: center;
    margin-top: 2vh;

    button {
        background-color: #ff914d;
        color: #fff;
        height: 3.8vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;

        width: 100%;
        max-width: 200px; 
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 768px) {
        button {
            max-width: 150px; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #ff914d;
            color: #fff;
            height: 8.6vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
    
            width: 80%;
            max-width: 200px; 
            margin-left: auto;
            margin-right: auto;
        }    
    }
`;

export const Correction = styled.div `
    text-align: center;
`;

export const CorrectText = styled.p`
    color: #fff;
    margin: 0 3.4vh;
    margin-top: 2vh;
`;

export const IncorrectText = styled.p`
    color: #fff;
`;

export const EmptyButton = styled.div `
    text-align: center;
    margin-top: 4vh;

    button {
        background-color: #ffbd59;
        color: #fff;
        width: 33%;
        height: 4.2vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        button {
            width: 150px; 
            margin-left: auto;
            margin-right: auto; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #ffbd59;
            color: #fff;
            width: 16%;
            height: 8.4vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
        }
    }
`;