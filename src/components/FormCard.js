import React, { useState, useEffect } from "react";
import "./FormCard.css";
import randomQuestion from "./RandomQuestions";

function FormCard() {
    const [inputValue, setInputValue] = useState(""); 
    const [currentQuestion, setCurrentQuestion] = useState(null); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const result = isCorrect(currentQuestion, inputValue);
        console.log('Form submitted with input:', result);
        if (result){
            setCurrentQuestion(randomQuestion());
            setInputValue("");
        }   
    };

    const normalize = (str) => {
        return str
            .toLowerCase() 
            .replace(/[!?.,\s]/g, '') 
            .trim(); 
    };


    const isCorrect = (question, input) => {
        const normalizedInput = normalize(input);
        const normalizedAnswer = normalize(question.Answer);
        
        return normalizedInput === normalizedAnswer;
    };

    useEffect(() => {
        setCurrentQuestion(randomQuestion());
    }, []);

    return (
        <div className="form-card">
            <h1>RELOADED</h1>
            <p>{currentQuestion ? currentQuestion.English : "Loading question..."}</p> 
            <form onSubmit={handleSubmit}>
                <label>{currentQuestion ? currentQuestion.German : "Loading question..."}
                    <input 
                        name="query" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                    />
                </label>
            </form>
        </div>
    );
}

export default FormCard;
