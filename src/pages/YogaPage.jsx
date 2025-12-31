import React, { useState } from "react";
import "./YogaPage.css";

const yogaData = [
  {
    category: "Asthma & Breathing Issues",
    description: "Gentle yoga postures tailored to improve lung capacity and calm the nervous system.",
    poses: [
      {
        name: "Sukhasana + Pranayama (Easy Pose with Breathing)",
        image: "https://insideyoga.org/wp-content/uploads/2024/03/78_Baddha-Konasana.jpg",
        benefits: ["Improves lung capacity", "Regulates breathing", "Calms the nervous system"],
        howItHelps: "Slow breathing reduces breathlessness and anxiety linked with asthma.",
      },
      {
        name: "Bhujangasana (Cobra Pose)",
        image: "https://omstars.com/blog/wp-content/uploads/2023/07/ig-feed-pose-breakdown-Bhujangasana-Cobra-Pose.png",
        benefits: ["Opens chest & lungs", "Strengthens respiratory muscles", "Improves oxygen flow"],
      },
      {
        name: "Setu Bandhasana (Bridge Pose)",
        image: "https://inbalancehealth.ca/wp-content/uploads/2016/04/160403-015x_web.jpg",
        benefits: ["Expands chest", "Improves breathing rhythm", "Reduces fatigue"],
        note: "⚠️ Avoid holding breath; move slowly.",
      },
    ],
  },
  {
    category: "Stress, Anxiety & Overthinking",
    description: "Calming poses to release tension and lower cortisol levels.",
    poses: [
      {
        name: "Balasana (Child’s Pose)",
        image: "https://www.theyogacollective.com/wp-content/uploads/2019/10/4143473057707883372_IMG_8546-2-1200x800.jpg",
        benefits: ["Instantly calms the mind", "Releases back & shoulder tension"],
      },
      {
        name: "Savasana (Corpse Pose)",
        image: "https://static1.squarespace.com/static/58c7e589440243bdb17f5be5/t/58f48182e4fcb5335f363d0d/1493228650732/?format=1500w",
        benefits: ["Deep relaxation", "Lowers cortisol (stress hormone)"],
      },
      {
        name: "Seated Meditation",
        image: "https://images.squarespace-cdn.com/content/v1/57b5ef68c534a5cc06edc769/a2f2524b-f882-451a-a9a8-9ffd93f9ac8e/meditation-positions-lotus.jpg",
        benefits: ["Improves focus", "Reduces racing thoughts"],
      },
    ],
  },
  {
    category: "PCOS / Hormonal Balance",
    description: "Poses to improve blood circulation and support reproductive health.",
    poses: [
      {
        name: "Baddha Konasana (Butterfly Pose)",
        image: "https://omstars.com/blog/wp-content/uploads/2023/08/how-to-do-Baddha-Konasana.png",
        benefits: ["Improves blood circulation", "Supports reproductive health"],
      },
      {
        name: "Bhujangasana (Cobra Pose)",
        image: "https://omstars.com/blog/wp-content/uploads/2023/07/ig-feed-pose-breakdown-Bhujangasana-Cobra-Pose.png",
        benefits: ["Stimulates ovaries", "Balances hormones"],
      },
      {
        name: "Setu Bandhasana (Bridge Pose)",
        image: "https://liforme.com/cdn/shop/articles/Bridge_Pose_0000_Bridge_Pose_-_Setu_Bandhasana_02_Sara_Ticha_92570976-d7da-4886-b3e8-510c33c08cd9.jpg?v=1749131948",
        benefits: ["Improves thyroid function", "Reduces fatigue"],
      },
    ],
  },
  {
    category: "Back Pain & Bad Posture",
    description: "Strengthening poses to improve spinal flexibility and reduce stiffness.",
    poses: [
      {
        name: "Cat–Cow Pose",
        image: "https://media1.popsugar-assets.com/files/thumbor/FcTiEzA4dpzP5LND0I0csu36jQE%3D/1456x1456/filters%3Aformat_auto%28%29%3Aquality%2885%29%3Aextract_cover%28%29/2025/01/10/960/n/1922729/tmp_TSf6dQ_46ee51111cabbf45_PS24_Fitness_CatCow_Horizontal.jpg",
        benefits: ["Improves spinal flexibility", "Reduces stiffness"],
      },
      {
        name: "Bhujangasana (Cobra Pose)",
        image: "https://insideyoga.org/wp-content/uploads/2024/04/Cobra-Pose_Right_Wrong.jpg",
        benefits: ["Strengthens lower back", "Improves posture"],
      },
    ],
  },
  {
    category: "Sleep & Insomnia",
    description: "Relaxing poses to calm the nervous system and prepare for deep sleep.",
    poses: [
      {
        name: "Viparita Karani (Legs Up the Wall)",
        image: "https://www.yogajournal.com/wp-content/uploads/2021/12/Legs-Up-the-Wall-Pose_Andrew-Clark_2400x1350.jpeg",
        benefits: ["Calms nervous system", "Improves sleep quality"],
      },
      {
        name: "Deep Breathing + Savasana",
        image: "https://www.yogabasics.com/yogabasics2025/wp-content/uploads/2021/06/Yoga-for-Bedtime-infographic-480x720.jpg",
        benefits: ["Slows heart rate", "Induces deep relaxation"],
      },
    ],
  },
  {
    category: "Digestion & Bloating",
    description: "Poses to enhance digestion and reduce gas.",
    poses: [
      {
        name: "Pavanamuktasana (Wind-Relieving Pose)",
        image: "https://www.theyogacollective.com/wp-content/uploads/2019/11/Wind-Relieving-Pose-for-Pose-Page-e1574900237893.jpeg",
        benefits: ["Reduces gas & bloating", "Improves digestion"],
      },
      {
        name: "Vajrasana",
        image: "https://www.yogicwayoflife.com/wp-content/uploads/2015/09/Vajrasana_Thunderbolt_Pose_Yoga_Asana.jpg",
        benefits: ["Enhances digestion", "Can be done after meals"],
      },
    ],
  },
];

const YogaPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" ? yogaData : yogaData.filter((item) => item.category === filter);

  return (
    <div className="yoga-page">
      <header className="yoga-header">
        <h1 className="subtitle">Personalized yoga solutions for your well-being.</h1>
      </header>

      <section className="filter-section">
        <p className="filter-label">What are you feeling today?</p>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {yogaData.map((item, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === item.category ? "active" : ""}`}
              onClick={() => setFilter(item.category)}
            >
              {item.category.split(" ")[0]} {/* Show first word/part for brevity if needed, or full name */}
            </button>
          ))}
        </div>
      </section>

      <div className="yoga-content">
        {filteredData.map((categoryItem, index) => (
          <section key={index} className="yoga-category-section">
            <h2 className="category-title">{categoryItem.category}</h2>
            <p className="category-description">{categoryItem.description}</p>

            <div className="poses-grid">
              {categoryItem.poses.map((pose, poseIndex) => (
                <div key={poseIndex} className="pose-card">
                  <div className="pose-image-container">
                    <img src={pose.image} alt={pose.name} className="pose-image" />
                  </div>
                  <div className="pose-info">
                    <h3>{pose.name}</h3>
                    <div className="benefits-list">
                      <strong>Benefits:</strong>
                      <ul>
                        {pose.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    {pose.howItHelps && <p className="how-it-helps"><strong>How it helps:</strong> {pose.howItHelps}</p>}
                    {pose.note && <p className="safety-note">{pose.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="safety-section">
        <h3>🛑 Practice with Awareness</h3>
        <p>
          Yoga is a supportive wellness practice, not a replacement for medical treatment.
          If you have chronic conditions (asthma, heart issues, pregnancy), consult a healthcare professional before starting.
        </p>
      </section>
    </div>
  );
};

export default YogaPage;
