import React from "react";
import "./HealthBar.css";

function HealthBar({ maxHP, currentHP }) {

    const calculateWidth = (maxHP, currentHP) => {
        return (currentHP / maxHP) * 100;
    };

    const healthBarWidth = calculateWidth(maxHP, currentHP);

    return (
        <>
            <div className="healthbar-container">
                <h1 className="hp-title">HP</h1>
                <div className="statusbar-container">
                    <div 
                        className="statusbar" 
                        style={{ width: `${healthBarWidth}%` }}
                    />
                </div>
            </div>
        </>
    );
}

export default HealthBar;
