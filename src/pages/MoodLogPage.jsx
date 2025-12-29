import React, { useState } from 'react';
import './MoodLogPage.css';

const MoodLogPage = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [optionalNote, setOptionalNote] = useState('');
    const [selectedDay, setSelectedDay] = useState(null);
    const [moodData, setMoodData] = useState([
        { day: 'Mon', emotion: 'Calm', note: '' },
        { day: 'Tue', emotion: 'Anxious', note: 'Work deadline' },
        { day: 'Wed', emotion: 'Overwhelmed', note: '' },
        { day: 'Thu', emotion: 'Tired', note: '' },
        { day: 'Fri', emotion: 'Hopeful', note: '' },
        { day: 'Sat', emotion: 'Calm', note: '' },
        { day: 'Sun', emotion: 'Calm', note: 'Relaxed day' }
    ]);

    const emotions = [
        { id: 'calm', label: 'Calm', color: '#6b8b5a' },
        { id: 'anxious', label: 'Anxious', color: '#6b9b9e' },
        { id: 'sad', label: 'Sad', color: '#6b7c9e' },
        { id: 'hopeful', label: 'Hopeful', color: '#c4a55a' },
        { id: 'overwhelmed', label: 'Overwhelmed', color: '#c4915a' },
        { id: 'tired', label: 'Tired', color: '#8b7a6f' },
        { id: 'lonely', label: 'Lonely', color: '#7a6b8b' }
    ];

    const getEmotionYPosition = (emotion) => {
        const emotionMap = {
            'Calm': 80,
            'Hopeful': 70,
            'Tired': 50,
            'Lonely': 40,
            'Sad': 30,
            'Anxious': 20,
            'Overwhelmed': 10
        };
        return emotionMap[emotion] || 50;
    };

    const generateInsight = () => {
        const emotions = moodData.map(d => d.emotion);
        const calmCount = emotions.filter(e => e === 'Calm').length;
        const anxiousCount = emotions.filter(e => e === 'Anxious').length;

        if (calmCount >= 4) {
            return "You found more calm toward the end of the week.";
        } else if (anxiousCount >= 3) {
            return "This week felt heavier in the middle — that happens.";
        } else {
            return "Your emotions changed, and you stayed with them.";
        }
    };

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
    };

    const handleLogMood = () => {
        if (selectedEmotion) {
            // Use selected day or default to today
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const targetDay = selectedDay || days[new Date().getDay()];

            console.log('Logging mood for:', targetDay, 'Emotion:', selectedEmotion.label);

            // Create completely new array
            const updatedMoodData = [...moodData];
            const dayIndex = updatedMoodData.findIndex(entry => entry.day === targetDay);

            if (dayIndex !== -1) {
                console.log('Found day at index:', dayIndex, 'Current emotion:', updatedMoodData[dayIndex].emotion);
                updatedMoodData[dayIndex] = {
                    day: targetDay,
                    emotion: selectedEmotion.label,
                    note: optionalNote || updatedMoodData[dayIndex].note
                };
                console.log('New emotion:', updatedMoodData[dayIndex].emotion);
            }

            console.log('Setting new mood data:', updatedMoodData);

            // Force state update
            setMoodData(updatedMoodData);

            // Clear form
            setSelectedEmotion(null);
            setOptionalNote('');
            setSelectedDay(null);
        }
    };

    return (
        <div className="mood-log-page">
            <div className="mood-log-container">

                {/* Page Header */}
                <div className="mood-log-header">
                    <h1 className="mood-log-title">Your Emotional Rhythm</h1>
                    <p className="mood-log-subtitle">This is not a report card. Just a reflection.</p>
                </div>

                {/* Mood Input Section */}
                <div className="mood-input-section">
                    <h3 className="mood-input-label">How are you feeling today?</h3>

                    {/* Day Selection */}
                    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--mood-text-muted)', marginBottom: '0.8rem' }}>
                            Select a day to update (or leave blank for today):
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <button
                                    key={day}
                                    onClick={() => setSelectedDay(day)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        border: selectedDay === day ? '2px solid rgba(196, 145, 90, 0.6)' : '1px solid rgba(196, 145, 90, 0.2)',
                                        background: selectedDay === day ? 'rgba(196, 145, 90, 0.2)' : 'var(--mood-surface-light)',
                                        color: 'var(--mood-text-soft)',
                                        cursor: 'pointer',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mood-emotion-grid">
                        {emotions.map((emotion) => (
                            <button
                                key={emotion.id}
                                className={`mood-emotion-button ${selectedEmotion?.id === emotion.id ? 'selected' : ''}`}
                                onClick={() => handleEmotionSelect(emotion)}
                                style={{
                                    '--emotion-color': emotion.color
                                }}
                            >
                                {emotion.label}
                            </button>
                        ))}
                    </div>

                    <input
                        type="text"
                        className="mood-optional-note"
                        placeholder="Anything you want to remember? (optional)"
                        value={optionalNote}
                        onChange={(e) => setOptionalNote(e.target.value)}
                    />

                    <button
                        className="mood-log-button"
                        onClick={handleLogMood}
                        disabled={!selectedEmotion}
                    >
                        Log this moment
                    </button>
                </div>

                {/* Mood Chart Section */}
                <div className="mood-chart-section">
                    <h3 className="mood-chart-title">This Week</h3>

                    <div className="mood-chart-container">
                        <svg
                            className="mood-chart"
                            viewBox="0 0 700 300"
                            preserveAspectRatio="xMidYMid meet"
                            key={JSON.stringify(moodData)}
                        >
                            {/* Y-axis labels */}
                            <text x="10" y="30" className="chart-label">Overwhelmed</text>
                            <text x="10" y="80" className="chart-label">Anxious</text>
                            <text x="10" y="130" className="chart-label">Sad</text>
                            <text x="10" y="180" className="chart-label">Lonely</text>
                            <text x="10" y="230" className="chart-label">Tired</text>
                            <text x="10" y="260" className="chart-label">Hopeful</text>
                            <text x="10" y="290" className="chart-label">Calm</text>

                            {/* Chart line */}
                            <path
                                d={moodData.map((data, index) => {
                                    const x = 120 + (index * 80);
                                    const y = 300 - getEmotionYPosition(data.emotion);
                                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                                }).join(' ')}
                                className="mood-chart-line"
                                fill="none"
                                stroke="rgba(196, 145, 90, 0.6)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Chart points */}
                            {moodData.map((data, index) => {
                                const x = 120 + (index * 80);
                                const y = 300 - getEmotionYPosition(data.emotion);
                                return (
                                    <g key={index}>
                                        <circle
                                            cx={x}
                                            cy={y}
                                            r="6"
                                            className="mood-chart-point"
                                            fill="rgba(196, 145, 90, 0.8)"
                                        />
                                        <text
                                            x={x}
                                            y="320"
                                            className="chart-day-label"
                                            textAnchor="middle"
                                        >
                                            {data.day}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Gentle Insight */}
                    <div className="mood-insight">
                        <p>{generateInsight()}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MoodLogPage;
