import React, { useState } from 'react';
import './FutureYouPage.css';

const FutureYouPage = () => {
    const [letterContent, setLetterContent] = useState('');
    const [savedLetters, setSavedLetters] = useState([]);
    const [showLetter, setShowLetter] = useState(null);
    const [selectedPrompt, setSelectedPrompt] = useState('');

    const prompts = [
        { emoji: '💛', text: 'What do you want to remember about yourself?' },
        { emoji: '🌱', text: 'What has carried you through before?' },
        { emoji: '🌈', text: 'What would comfort you on a bad day?' },
        { emoji: '✨', text: 'What should future-you never forget?' }
    ];

    const handleSaveLetter = () => {
        if (letterContent.trim()) {
            const newLetter = {
                id: Date.now(),
                content: letterContent,
                date: new Date().toLocaleDateString(),
                timestamp: Date.now()
            };
            setSavedLetters([...savedLetters, newLetter]);
            setLetterContent('');
            setSelectedPrompt('');
        }
    };

    const handlePromptClick = (promptText) => {
        setSelectedPrompt(promptText);
        setLetterContent(letterContent + (letterContent ? '\n\n' : '') + promptText + '\n');
    };

    const handleRevealLetter = (letter) => {
        setShowLetter(letter);
    };

    const handleCloseLetter = () => {
        setShowLetter(null);
    };

    return (
        <div className="future-you-page">
            {/* Floating Background Elements */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>

            <div className="future-you-container">

                {/* Page Header */}
                <div className="future-you-header">
                    <h1 className="future-you-title">A Letter for Your Future Self</h1>
                    <p className="future-you-subtitle">Write now. Read it when you need it most.</p>
                </div>

                {/* Writing Section */}
                <div className="letter-writing-section">

                    {/* Creative Prompts */}
                    <div className="prompt-chips">
                        {prompts.map((prompt, index) => (
                            <button
                                key={index}
                                className="prompt-chip"
                                onClick={() => handlePromptClick(prompt.text)}
                            >
                                <span className="prompt-emoji">{prompt.emoji}</span>
                                <span className="prompt-text">{prompt.text}</span>
                            </button>
                        ))}
                    </div>

                    {/* Writing Area */}
                    <div className="letter-card">
                        <textarea
                            className="letter-textarea"
                            placeholder="Say the things you wish someone would tell you on a hard day..."
                            value={letterContent}
                            onChange={(e) => setLetterContent(e.target.value)}
                            rows={12}
                        />

                        <div className="privacy-note">
                            🔐 <span>This letter lives only here — just for you.</span>
                        </div>

                        <div className="save-buttons">
                            <button
                                className="save-button primary"
                                onClick={handleSaveLetter}
                                disabled={!letterContent.trim()}
                            >
                                Save this letter
                            </button>
                            <button
                                className="save-button secondary"
                                onClick={handleSaveLetter}
                                disabled={!letterContent.trim()}
                            >
                                Save it quietly for later
                            </button>
                        </div>
                    </div>
                </div>

                {/* Saved Letters Section */}
                {savedLetters.length > 0 && (
                    <div className="saved-letters-section">
                        <h3 className="saved-letters-title">Your Letters</h3>
                        <div className="saved-letters-grid">
                            {savedLetters.map((letter) => (
                                <div
                                    key={letter.id}
                                    className="saved-letter-card"
                                    onClick={() => handleRevealLetter(letter)}
                                >
                                    <div className="letter-preview">
                                        {letter.content.substring(0, 80)}...
                                    </div>
                                    <div className="letter-date">{letter.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Letter Reveal Modal */}
            {showLetter && (
                <div className="letter-reveal-overlay" onClick={handleCloseLetter}>
                    <div className="letter-reveal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="reveal-header">From a stronger version of you…</div>
                        <div className="reveal-content">{showLetter.content}</div>
                        <div className="reveal-footer">You wrote this because you believed you'd get here.</div>

                        <div className="reveal-buttons">
                            <button className="reveal-button sit" onClick={handleCloseLetter}>
                                Sit with this
                            </button>
                            <button className="reveal-button close" onClick={handleCloseLetter}>
                                Close gently
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FutureYouPage;
