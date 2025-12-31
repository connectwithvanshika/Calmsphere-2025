import React from "react";
import "./MusicPage.css";

const musicData = [
  {
    category: "Feeling Distracted or Unable to Focus",
    frequency: "Beta Waves (14–30 Hz)",
    desc: "When your mind feels scattered or you’re struggling to concentrate, beta frequencies help improve alertness and mental clarity without causing stress.",
    bestFor: ["Studying & learning", "Coding or deep work", "Productivity & concentration"],
    suggested: "Soft focus music, low-volume binaural beats, minimal instrumental loops",
    images: [
      "https://m.media-amazon.com/images/I/714eUNWzqRL.jpg",
      "https://i.scdn.co/image/ab67706f000000021d5f8876dc9c222b5246ef32",
      "https://www.soundtoro.com/blog/wp-content/uploads/2024/04/coworking-music-1024x682.jpg"
    ]
  },
  {
    category: "Difficulty Sleeping or Insomnia",
    frequency: "Delta Waves (0.5–4 Hz)",
    desc: "Delta frequencies slow down brain activity, helping the body enter deep, restorative sleep.",
    bestFor: ["Trouble falling asleep", "Light or restless sleep", "Night-time anxiety"],
    suggested: "Deep ambient sleep music, rainfall, night nature sounds",
    images: [
      "https://img.apmcdn.org/e90bc14147bacf2295b18b291dcc73a2478df295/widescreen/d76f86-20210219-lullabies-heard-in-classical-music-2000.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/2d/25/292d257f-e2b6-4f0d-b33c-254f3d924ce8/artwork.jpg/600x600bf-60.jpg",
      "https://i.scdn.co/image/ab67616d0000b2734200f7deee6a08bc7f61238e"
    ]
  },
  {
    category: "Feeling Stressed, Anxious, or Overthinking",
    frequency: "Alpha Waves (8–13 Hz)",
    desc: "Alpha waves promote calmness while keeping the mind gently aware, making them ideal for stress relief.",
    bestFor: ["Anxiety & overthinking", "Mental fatigue", "Emotional calm"],
    suggested: "Soft piano, forest ambience, flowing water sounds",
    images: [
      "https://i.scdn.co/image/ab67616d0000b27325c3459a2e0cc7d89f5f6cba",
      "https://www.jefferson.edu/news/2019/11/how-to-manipulate-brain-waves-for-a-better-mental-state/_jcr_content/root/article/content-container-1/image.coreimg.82.1024.jpeg/1725916106917/brain-waves-infographic-new.jpeg",
      "https://m.media-amazon.com/images/I/911YjAi5OuL._UF1000%2C1000_QL80_.jpg"
    ]
  },
  {
    category: "Seeking Calm, Meditation, or Inner Peace",
    frequency: "Theta Waves (4–8 Hz)",
    desc: "Theta frequencies guide the mind into deep relaxation and mindfulness.",
    bestFor: ["Meditation & mindfulness", "Emotional healing", "Inner awareness"],
    suggested: "Tibetan singing bowls, harmonic tones, gentle chants",
    images: [
      "https://m.media-amazon.com/images/I/51Mf5q1sVWL._SL500_.jpg",
      "https://www.lakearrowheadresort.com/site/assets/files/31674/gettyimages-2002975694.500x500.jpg",
      "https://m.media-amazon.com/images/I/81m3KrUaGoL._AC_UF894%2C1000_QL80_.jpg"
    ]
  },
  {
    category: "Feeling Mentally Exhausted or Head Heavy",
    frequency: "528 Hz (Healing Frequency)",
    desc: "Known for emotional balance and relaxation, this frequency helps release mental tension.",
    bestFor: ["Mental burnout", "Headaches & fatigue", "Emotional stress"],
    suggested: "Healing frequency tones, slow instrumental music",
    images: [
      "https://i.scdn.co/image/ab67616d0000b273990ba720aab109d6f34ee16f",
      "https://www.uclahealth.org/sites/default/files/styles/landscape_16x9_030000_1200x675/public/images/6d/soundbath-blog.jpg?f=41077141&itok=0k9oUQiO",
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84af88a390f7dd572e5b9e8c48"
    ]
  },
  {
    category: "Need a Quick Reset or Power Nap",
    frequency: "Theta–Delta Mix",
    desc: "Perfect for short rest breaks without entering very deep sleep.",
    bestFor: ["Power naps", "Midday reset", "Refreshing the mind"],
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/73/b0/b4/73b0b4fa-1dd1-8125-3af8-955550ca8392/8033772788151.jpg/600x600bf-60.jpg",
      "https://i.scdn.co/image/ab67616d00001e024eef5e6c3ed82a70378dd9d3",
      "https://m.media-amazon.com/images/I/51wAUMEXD6L._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg"
    ]
  }
];

const MusicPage = () => {
  return (
    <div className="music-page">
      <header className="music-header">
        {/* <h1>Of course baby 🤍🎶</h1> */}
        <h1 className="subtitle">Soothing Music & Healing Frequencies</h1>
      </header>

      <section className="intro-section">
        <p>
          A thoughtfully curated collection of calming music, healing frequencies, and nature sounds designed to support your mental state.
          Whether you’re feeling distracted, anxious, restless, or unable to sleep — there’s a sound here to gently guide your mind back to balance.
        </p>
      </section>

      <section className="listen-guide-section">
        <h2>🌿 Listen According to How You Feel</h2>
        <p>
          Sound has the power to influence brain waves and emotions.
          Choose music based on what you’re experiencing in the moment and let your mind naturally shift into a calmer state.
        </p>
      </section>

      <div className="music-grid">
        {musicData.map((item, index) => (
          <section key={index} className="music-category-card">
            <h3 className="category-title">{item.category}</h3>

            <div className="images-row">
              {item.images.map((img, i) => (
                <img key={i} src={img} alt={`${item.category} visual ${i + 1}`} className="feature-img" />
              ))}
            </div>

            <div className="frequency-badge">
              <strong>Recommended Frequency:</strong> {item.frequency}
            </div>

            <p className="category-desc">{item.desc}</p>

            <div className="best-for">
              <strong>Best for:</strong>
              <ul>
                {item.bestFor.map((bf, i) => (
                  <li key={i}>{bf}</li>
                ))}
              </ul>
            </div>

            {item.suggested && (
              <p className="suggested-sounds">
                <strong>Suggested Sounds:</strong> {item.suggested}
              </p>
            )}
          </section>
        ))}
      </div>

      <section className="how-to-use-section">
        <h2>🎧 How to Use</h2>
        <ul>
          <li>Use headphones for better results</li>
          <li>Keep volume low and comfortable</li>
          <li>Find a quiet space</li>
          <li>Let the sound play without forcing focus</li>
        </ul>
      </section>

      <section className="reminder-section">
        <h2>Gentle Reminder</h2>
        <p>
          Sound therapy supports relaxation and focus but is not a medical treatment.
          If you feel discomfort, stop listening and take a break.
        </p>
      </section>

      <section className="create-calm-section">
        <h2>Create Your Calm Moment</h2>
        <p>Pause. Breathe. Choose the sound that matches your mood and let peace find its way back to you.</p>
      </section>
    </div>
  );
};

export default MusicPage;
