import React, { useState } from "react";
import "./JournalPage.css";

const MoodButton = ({ mood, isSelected, onClick }) => (
  <button
    className={`mood-btn ${isSelected ? "selected" : ""}`}
    onClick={() => onClick(mood)}
  >
    {mood}
  </button>
);

const JournalPage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [entry, setEntry] = useState("");

  const moods = [
    "Calm", "Happy", "Anxious", "Sad", "Stressed", "Tired", "Motivated", "Neutral"
  ];

  const prompts = [
    "What made me feel this way today?",
    "Did anything drain or uplift my energy?",
    "What is one small thing I’m grateful for?",
    "What do I need more of right now?"
  ];

  return (
    <div className="journal-page">
      <header className="journal-header">
        {/* <h1>Here you go baby 🤍📝</h1> */}
        <h1 className="subtitle">Mood Journal</h1>
      </header>

      <section className="intro-section">
        <p>
          A gentle space to pause, reflect, and reconnect with yourself.
          Track your emotions daily to gain deeper insights into your mental well-being and cultivate mindfulness for a more balanced, peaceful life.
        </p>
      </section>

      <section className="why-journal-section">
        <h2>🌿 Why Keep a Mood Journal?</h2>
        <p>
          Your emotions change every day — noticing them is the first step toward understanding them.
          A mood journal helps you become more aware of patterns, triggers, and moments of calm, allowing you to care for your mental health with intention.
        </p>
      </section>

      <section className="mood-selection-section">
        <h2>😊 How Are You Feeling Today?</h2>
        <p>Choose the emotion that best represents your current mood. There’s no right or wrong feeling — just honesty and awareness.</p>

        <div className="mood-grid">
          {moods.map((mood) => (
            <MoodButton
              key={mood}
              mood={mood}
              isSelected={selectedMood === mood}
              onClick={setSelectedMood}
            />
          ))}
        </div>
      </section>

      <section className="entry-section">
        <h2>✍️ Express Your Thoughts (Optional)</h2>
        <p>Write freely about your day, your thoughts, or anything that’s on your mind. This space is private, judgment-free, and entirely yours.</p>
        <textarea
          className="journal-textarea"
          placeholder="Start writing here..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <p className="note-text">*You can write as much or as little as you like.*</p>
      </section>

      <section className="prompts-section">
        <h2>🌸 Reflect with Gentle Prompts</h2>
        <p>If you’re not sure what to write, try one of these reflections:</p>
        <ul className="prompts-list">
          {prompts.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
      </section>

      <div className="info-grid">
        <section className="info-card">
          <h2>📊 Understand Your Emotional Patterns</h2>
          <p>
            Over time, your journal entries help reveal emotional trends and recurring patterns.
            Recognizing these patterns can guide you toward healthier habits, better boundaries, and emotional balance.
          </p>
        </section>

        <section className="info-card">
          <h2>🧘 Practice Mindfulness Through Awareness</h2>
          <p>
            Mood journaling encourages you to slow down and check in with yourself.
            By acknowledging your feelings without judgment, you create space for healing, clarity, and self-compassion.
          </p>
        </section>
      </div>

      <section className="safe-space-section">
        <h2>🤍 A Safe & Personal Space</h2>
        <p>
          Your journal is private and meant only for you.
          Express yourself openly, without fear or pressure — this is your moment of calm.
        </p>
      </section>

      <section className="ritual-section">
        <h2>🌙 Make It a Daily Ritual</h2>
        <p>
          Even a few minutes each day can make a meaningful difference.
          Consistency builds emotional awareness, resilience, and inner peace.
        </p>
      </section>

      <section className="begin-entry-section">
        <h2>✨ Begin Your Entry</h2>
        <p>Take a deep breath. Notice how you feel. Write honestly and let your emotions flow.</p>
      </section>
    </div>
  );
};

export default JournalPage;
