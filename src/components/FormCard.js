import React, { useState, useEffect } from "react";
import "./FormCard.css";

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

    const randomQuestion = () => {
        const questions = [
            {
                English: "Working at Andeo is a great experience!",
                German: "Bei Andeo zu arbeiten ist eine großartige",
                Answer: "Erfahrung"
            },
            {
                English: "The cake is a lie.",
                German: "Der Kuchen ist eine",
                Answer: "Lüge"
            }
        ];
        return questions[Math.floor(Math.random() * questions.length)];
    };

    const isCorrect = (question, input) => {
        if (input.toLowerCase() === question.Answer.toLowerCase()) {
            return true;
        }
        return false;
    };

    // Use useEffect to set a random question when the component mounts
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
