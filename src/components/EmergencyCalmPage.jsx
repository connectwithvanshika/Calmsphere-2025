import React, { useState, useEffect } from 'react';
import './EmergencyCalmPage.css';

const EmergencyCalmPage = ({ onExit }) => {
    const [showSecondaryText, setShowSecondaryText] = useState(false);
    const [audioMuted, setAudioMuted] = useState(false);

    useEffect(() => {
        // Show secondary text after 5 seconds
        const timer = setTimeout(() => {
            setShowSecondaryText(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleStayLonger = () => {
        // Reset the breathing cycle, continue staying
        setShowSecondaryText(false);
        setTimeout(() => setShowSecondaryText(true), 5000);
    };

    const handleFeelSteadier = () => {
        if (onExit) {
            onExit();
        }
    };

    const toggleAudio = () => {
        setAudioMuted(!audioMuted);
    };

    return (
        <div className="emergency-calm-overlay">
            <div className="emergency-calm-container">

                {/* Breathing Animation Circle */}
                <div className="breathing-circle-wrapper">
                    <div className="breathing-circle"></div>
                    <p className="breathing-label">Breathe in… Breathe out…</p>
                </div>

                {/* Core Message */}
                <h1 className="emergency-core-message">
                    Stay. Breathe. You matter.
                </h1>

                {/* Secondary Support Text (appears after 5 seconds) */}
                {showSecondaryText && (
                    <p className="emergency-secondary-text">
                        You don't have to figure anything out right now.
                    </p>
                )}

                {/* Audio Control (Mute/Unmute) */}
                <button
                    className="audio-toggle-button"
                    onClick={toggleAudio}
                    aria-label={audioMuted ? "Unmute audio" : "Mute audio"}
                >
                    {audioMuted ? '🔇' : '🔊'}
                </button>

                {/* Exit Options */}
                <div className="emergency-exit-options">
                    <button
                        className="exit-button steadier"
                        onClick={handleFeelSteadier}
                    >
                        I feel a little steadier
                    </button>
                    <button
                        className="exit-button stay-longer"
                        onClick={handleStayLonger}
                    >
                        Stay here longer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyCalmPage;
