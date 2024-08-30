import React from "react";
import "./GameOver.css";
import { Button } from "./Button";

function GameOver() {
    const reload = () => {
        window.location.reload();
    };

    return (
        <div className="gameover-container">
            <h1>GAME OVER</h1>
            <Button 
                buttonStyle='btn--primary' 
                buttonSize='btn--large' 
                onClick={reload}>
                Try again
            </Button>
        </div>
    );
}

export default GameOver;
