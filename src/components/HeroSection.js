import React, { useState, useRef, useEffect } from "react";
import '../App.css';
import './HeroSection.css';
import { Button } from './Button.js';
import FormCard from './FormCard';

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
                src="/videos/intro_mc_cut.mp4" 
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
            {!videoStarted && (
                <>
                    <h1 className="hero-title">RELOADED</h1>
                    <div className="hero-btns">
                        <Button 
                            buttonStyle='btn--outline' 
                            buttonSize='btn--large' 
                            onClick={handleVideoChange}>
                            Play
                        </Button>
                    </div>
                </>
            )}
            {videoStarted && (
                <FormCard />
            )}
        </div>
    );
}

export default HeroSection;
