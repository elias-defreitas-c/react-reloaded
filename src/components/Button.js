import React, { Children } from "react";
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--ourline']

export const Button = ({Children, type, onClick, buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    }