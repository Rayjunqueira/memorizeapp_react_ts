import styled from "styled-components";

export const Container = styled.div `
    margin-top: 8vh;
`;

export const DashTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #00BB61;
    margin: 0 2vh;
    border-radius: 3px;
    height: 11vh;

    h3 {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.7vh;
    }

    @media (max-height: 882px) and (min-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #00BB61;
        margin: 0 8vh;
        border-radius: 3px;
        height: 20vh;

        h3 {
            color: #fff;
            text-transform: uppercase;
            font-size: 5vh;
        }
    }

`;


export const InputContainer = styled.div `
    text-align: center;

    textarea {
        margin-top: -1.8vh;
        width: 80%;
        height: 8.5vh;
        border-radius: 5px;
        outline: none;
        background-color: #d9d9d9;
    }

    h4 {    
        color: #fff;
    }

    @media (max-width: 768px) {
        textarea {
            width: 90%; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        textarea {
            margin-top: -1.8vh;
            width: 80%;
            height: 30vh;
            border-radius: 5px;
            outline: none;
            background-color: #d9d9d9;
        }
    }
`;

export const CurrentlyQuestions = styled.div `
    text-align: center;
`;
 
export const ListQuestion = styled.div `
    display: flex;  
    justify-content: center;
    align-items: center;
`;

export const Question = styled.div `
    p {
        max-width: 300px; 
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;  
        color: #fff;
    }
`;

export const Remove = styled.div `
    #remove_icon {
        color: red;
        cursor: pointer;
        margin-left: 10px;
    }
`;

export const ButtonContainer = styled.div `
    text-align: center;
    max-width: 200px; 
    margin-left: auto;
    margin-right: auto;

    button {
        background-color: #ffbd59;
        color: #fff;
        width: 100%;
        height: 3.4vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;
        max-width: 150px; 
        margin-left: auto;
        margin-right: auto; 
    }

    @media (max-width: 768px) {
        button {
            width: 100%; 
            max-width: none; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #ffbd59;
            color: #fff;
            width: 100%;
            height: 8.9vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
            max-width: 150px; 
            margin-left: auto;
            margin-right: auto; 
        }
    }
`;

export const ButtonRegister = styled.div `
    text-align: center;
    margin-top: 4vh;

    button {
        background-color: #ff914d;
        color: #fff;
        width: 30%;
        height: 4.1vh;
        border-radius: 4px;
        outline: none;
        border: none;
        margin-top: 1.5vh;
        cursor: pointer;
        max-width: 200px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        button {
            width: 70%; 
        }
    }

    @media (max-height: 882px) and (min-width: 400px) {
        button {
            background-color: #ff914d;
            color: #fff;
            width: 30%;
            height: 9vh;
            border-radius: 4px;
            outline: none;
            border: none;
            margin-top: 1.5vh;
            cursor: pointer;
            max-width: 200px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5vh;
        }
    }
`;