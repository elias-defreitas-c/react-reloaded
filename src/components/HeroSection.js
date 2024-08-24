import React, { useState, useRef, useEffect } from "react";
import '../App.css';
import './HeroSection.css';
import { Button } from './Button.js';

function HeroSection() {
    const [isIntroPlaying, setIsIntroPlaying] = useState(false); 
    const [videoStarted, setVideoStarted] = useState(false); 
    const introVideoRef = useRef(null); 
    const idleVideoRef = useRef(null);  

    const handleVideoChange = () => {
        setIsIntroPlaying(true);
        setVideoStarted(true); 
        if (introVideoRef.current) {
            introVideoRef.current.play(); 
        }
    };

    const handleIntroEnd = () => {
        setIsIntroPlaying(false);
        if (idleVideoRef.current) {
            idleVideoRef.current.play(); 
        }
    };

    useEffect(() => {
        if (!isIntroPlaying && videoStarted && idleVideoRef.current) {
            idleVideoRef.current.play(); 
        }
    }, [isIntroPlaying, videoStarted]);

    return (
        <div className="hero-container">
            <video 
                ref={introVideoRef}
                src="/videos/intro_mc.mp4" 
                onEnded={handleIntroEnd} 
                style={{ 
                    display: 'block',
                    visibility: isIntroPlaying ? 'visible' : 'hidden' 
                }} 
                muted 
            />
            <video 
                ref={idleVideoRef}
                src="/videos/idle_mc.mp4" 
                loop
                muted
                style={{ 
                    display: 'block',
                    visibility: isIntroPlaying ? 'hidden' : (videoStarted ? 'visible' : 'hidden') 
                }} 
                preload="auto"
            />

            <h1>RELOADED</h1>
            <div className="hero-btns">
                <Button 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large' 
                    onClick={handleVideoChange}>
                    Start
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
