import React, { useState } from 'react';
import './EmotionTranslator.css';

const EmotionTranslator = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [completedAction, setCompletedAction] = useState(false);

    const emotions = [
        {
            id: 'overwhelmed',
            label: 'Overwhelmed',
            validation: "When you feel overwhelmed, your mind needs less — not more.",
            actions: [
                { text: 'Drink one glass of water', subtext: 'Just enough to pause.' },
                { text: 'Close your eyes for 60 seconds', subtext: 'Let the noise settle.' },
                { text: 'Write ONE sentence about what feels heavy', subtext: 'No editing. No explaining.' }
            ]
        },
        {
            id: 'anxious',
            label: 'Anxious',
            validation: "Anxiety is your body trying to protect you. You're safe right now.",
            actions: [
                { text: 'Place your hand on your chest', subtext: 'Feel yourself breathing.' },
                { text: 'Name 3 things you can see', subtext: 'Bring yourself here.' },
                { text: 'Step outside for one minute', subtext: 'Fresh air, nothing more.' }
            ]
        },
        {
            id: 'sad',
            label: 'Sad',
            validation: "Sadness isn't weakness. It's your heart processing something real.",
            actions: [
                { text: 'Let yourself cry if you need to', subtext: 'No timeline required.' },
                { text: 'Listen to one song that understands', subtext: "Music can hold what words can't." },
                { text: 'Wrap yourself in something soft', subtext: 'Comfort is allowed.' }
            ]
        },
        {
            id: 'tired',
            label: 'Tired',
            validation: 'Rest is not laziness. Your body is asking for what it needs.',
            actions: [
                { text: 'Lie down for 10 minutes', subtext: 'No guilt attached.' },
                { text: 'Say no to one thing today', subtext: 'Protect your energy.' },
                { text: 'Eat something gentle', subtext: 'Nourishment, not perfection.' }
            ]
        },
        {
            id: 'lonely',
            label: 'Lonely',
            validation: "Loneliness doesn't mean you're broken. Connection takes many forms.",
            actions: [
                { text: 'Send a simple message to someone', subtext: 'Even “thinking of you” counts.' },
                { text: 'Sit somewhere with gentle noise', subtext: 'Presence, not conversation.' },
                { text: 'Write to your future self', subtext: "You're not as alone as it feels." }
            ]
        },
        {
            id: 'calm',
            label: 'Calm',
            validation: 'This moment of peace is real. You can trust it.',
            actions: [
                { text: 'Notice what made this possible', subtext: 'Remember for harder days.' },
                { text: 'Do something slow', subtext: 'Tea. Walking. Just being.' },
                { text: 'Appreciate this version of yourself', subtext: 'You got here somehow.' }
            ]
        },
        {
            id: 'hopeful',
            label: 'Hopeful',
            validation: "Hope is courage. You're choosing to believe in what's possible.",
            actions: [
                { text: 'Write down one small dream', subtext: 'No matter how fragile.' },
                { text: 'Take one tiny step toward it', subtext: 'Movement, not perfection.' },
                { text: 'Share this feeling with someone', subtext: 'Hope grows when witnessed.' }
            ]
        },
        {
            id: 'numb',
            label: 'Numb',
            validation: "Numbness is protection. Your feelings will return when it's safer.",
            actions: [
                { text: 'Touch something with texture', subtext: 'Soft fabric. Cool water.' },
                { text: 'Move your body gently', subtext: 'Stretch. Walk. Just to feel.' },
                { text: "Don't force yourself to feel", subtext: 'This is temporary.' }
            ]
        }
    ];

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        setCompletedAction(false);
    };

    const handleActionComplete = () => {
        setCompletedAction(true);
    };

    const handleReset = () => {
        setSelectedEmotion(null);
        setCompletedAction(false);
    };

    const handleAnotherStep = () => {
        setCompletedAction(false);
    };

    return (
        <div className="emotion-translator-container">
            <div className={`emotion-translator-card ${selectedEmotion ? 'expanded' : ''}`}>

                {!selectedEmotion && (
                    <div className="emotion-selection">
                        <h2 className="emotion-headline">How are you feeling right now?</h2>
                        <p className="emotion-subtext">
                            No fixing. No pressure. Just choose what feels closest.
                        </p>

                        <div className="emotion-grid">
                            {emotions.map((emotion) => (
                                <button
                                    key={emotion.id}
                                    type="button"
                                    className={`emotion-button ${emotion.id}`}
                                    onClick={() => handleEmotionSelect(emotion)}
                                >
                                    {emotion.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {selectedEmotion && !completedAction && (
                    <div className="emotion-response">
                        <p className="validation-text">{selectedEmotion.validation}</p>

                        <div className="action-suggestions">
                            {selectedEmotion.actions.map((action, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="action-card"
                                    onClick={handleActionComplete}
                                >
                                    <p className="action-text">{action.text}</p>
                                    <p className="action-subtext">{action.subtext}</p>
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="back-button"
                            onClick={handleReset}
                        >
                            Choose a different feeling
                        </button>
                    </div>
                )}

                {completedAction && (
                    <div className="completion-state">
                        <p className="completion-message">
                            That was enough for this moment.
                        </p>
                        <p className="completion-submessage">
                            You don’t have to do everything.
                        </p>

                        <div className="completion-buttons">
                            <button
                                type="button"
                                className="done-button"
                                onClick={handleReset}
                            >
                                Done for now
                            </button>

                            <button
                                type="button"
                                className="another-step-button"
                                onClick={handleAnotherStep}
                            >
                                Suggest another gentle step
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EmotionTranslator;
