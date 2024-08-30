import React from "react";
import "./score.css";

function Score({currentScore}) {
    return (
        <>
            <div className="score">
                <p>
                    Score: {currentScore}
                </p>
            </div>
        </>
    )
}

export default Score;