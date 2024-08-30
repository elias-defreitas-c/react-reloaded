import React, { useState, useEffect } from "react";
import "./FormCard.css";
import randomQuestion from "./RandomQuestions";
import HealthBar from "./HealthBar";
import GameOver from "./GameOver";
import Score from "./score";

function FormCard() {
    const [isGameOver, setisGameOver] = useState(false); 
    const [inputValue, setInputValue] = useState(""); 
    const [currentQuestion, setCurrentQuestion] = useState(null); 
    const [maxHP] = useState(100); 
    const [currentHP, setCurrentHP] = useState(100); 
    const [currentScore, setCurrentScore] = useState(0)

    const handleInputChange = (event) => {
        setInputValue(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const result = isCorrect(currentQuestion, inputValue);
        
        if (result) {
            setCurrentScore(currentScore + 1)
            setCurrentQuestion(randomQuestion());
            setInputValue("");
        } else {
            const newHP = currentHP - 20;
            if (newHP <= 0) {
                setCurrentHP(0);
                setisGameOver(true);  
            } else {
                setCurrentHP(newHP);
            }
        }
    };

    const normalize = (str) => {
        return str.toLowerCase().replace(/[!?.,\s]/g, '').trim(); 
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
        <>
            {isGameOver && <GameOver />} 
            {!isGameOver && (
                <>
                    <div>
                        <HealthBar maxHP={maxHP} currentHP={currentHP} />
                    </div>
                    <div>
                        <Score currentScore={currentScore}/>
                    </div>
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
                </>
            )}
        </>
    );
}

export default FormCard;
