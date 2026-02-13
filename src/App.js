import React, { useState } from "react";
import "./style/App.css";

const techData = [
  {
    id: 1,
    name: "HTML",
    category: "Frontend",
    color: "#FF6B6B",
    desc: "Build the structure of the web.",
    topics: ["Semantic Tags", "SEO Basics", "Forms & Validation"],
  },
  {
    id: 2,
    name: "CSS",
    category: "Frontend",
    color: "#4D96FF",
    desc: "Master layouts and animations.",
    topics: ["Flexbox Master", "CSS Grid", "Custom Properties"],
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    color: "#FFD93D",
    desc: "The engine of the web.",
    topics: ["ES6+ Syntax", "Async/Await", "DOM Manipulation"],
  },
  {
    id: 4,
    name: "Python",
    category: "Backend",
    color: "#6BCB77",
    desc: "Powerful and easy to read.",
    topics: ["Data Structures", "Django/Flask", "Automation"],
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Database",
    color: "#4DB33D",
    desc: "Scale with NoSQL documents.",
    topics: ["Aggregation", "Schema Design", "Atlas Cloud"],
  },
  {
    id: 6,
    name: "Node.js",
    category: "Backend",
    color: "#3c873a",
    desc: "Run JS on the server.",
    topics: ["Event Loop", "NPM Ecosystem", "Streams"],
  },
  {
    id: 7,
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    desc: "Modern UI Component Library.",
    topics: ["Hooks (useEffect)", "Context API", "Redux Toolkit"],
  },
  {
    id: 8,
    name: "SQL",
    category: "Database",
    color: "#00758f",
    desc: "Manage relational data.",
    topics: ["Complex Joins", "Indexing", "Normalization"],
  },
  {
    id: 9,
    name: "Git & GitHub",
    category: "Tools",
    color: "#6e5494",
    desc: "Collaborate like a pro.",
    topics: ["Rebase vs Merge", "Git Flow", "Actions/CI-CD"],
  },
];

export default function App() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="container">
      <h1 className="header">Dev Roadmap 2026</h1>

      <div className="grid">
        {techData.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            style={{
              borderTop: `8px solid ${item.color}`,
              /* Glow effect using the item's specific color */
              boxShadow:
                activeId === item.id ? `0 20px 40px ${item.color}33` : "",
            }}
          >
            <span
              style={{
                color: item.color,
                fontSize: "0.75rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {item.category}
            </span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>

            {activeId === item.id && (
              <div className="topic-box">
                <h4>Learning Path</h4>
                <ul className="topic-list">
                  {item.topics.map((topic, index) => (
                    <li key={index}>⚡ {topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
