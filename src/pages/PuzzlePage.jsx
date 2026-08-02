import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import PageBackground from "../components/PageBackground";
import "./PuzzlePage.css";

// 10x10 grid — diagonal spells FRIENDSHIP, plus HAPPY, DAY, YOU, FOOL
const grid = [
  ["F", "Q", "G", "Z", "C", "W", "D", "U", "H", "Y"],
  ["V", "R", "O", "H", "A", "P", "P", "Y", "Q", "G"],
  ["Z", "X", "I", "G", "F", "C", "K", "D", "L", "M"],
  ["E", "Z", "G", "E", "R", "Q", "M", "N", "O", "P"],
  ["B", "P", "M", "K", "N", "W", "M", "B", "C", "D"],
  ["D", "Z", "G", "E", "R", "D", "S", "G", "H", "I"],
  ["A", "O", "M", "K", "N", "W", "S", "M", "B", "C"],
  ["Y", "J", "X", "Q", "F", "D", "W", "H", "K", "L"],
  ["Y", "O", "U", "Q", "P", "C", "S", "G", "I", "M"],
  ["F", "O", "O", "L", "P", "C", "S", "G", "W", "P"],
];

const highlightWords = [
  {
    key: "FRIENDSHIP",
    color: "purple",
    cells: [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]],
  },
  { key: "HAPPY", color: "blue", cells: [[1,3],[1,4],[1,5],[1,6],[1,7]] },
  { key: "DAY", color: "green", cells: [[5,0],[6,0],[7,0]] },
  { key: "YOU", color: "orange", cells: [[8,0],[8,1],[8,2]] },
  { key: "FOOL", color: "red", cells: [[9,0],[9,1],[9,2],[9,3]] },
];

function getHighlightColor(row, col, revealStep) {
  for (let i = 0; i < revealStep; i++) {
    for (const [r, c] of highlightWords[i].cells) {
      if (r === row && c === col) return highlightWords[i].color;
    }
  }
  return null;
}

function PuzzlePage() {
  const navigate = useNavigate();
  const [revealStep, setRevealStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [started, setStarted] = useState(false);

  const startReveal = () => {
    setStarted(true);
    highlightWords.forEach((_, index) => {
      setTimeout(() => {
        setRevealStep(index + 1);
        if (index === highlightWords.length - 1) {
          setTimeout(() => setShowPopup(true), 700);
        }
      }, index * 700);
    });
  };

  useEffect(() => {
    if (showPopup) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  }, [showPopup]);

  return (
    <PageBackground>
      <div className="puzzlepage-content">
        <div className="puzzlepage-grid-wrapper">
          <div className="puzzlepage-grid">
            {grid.map((row, rIdx) =>
              row.map((letter, cIdx) => {
                const color = getHighlightColor(rIdx, cIdx, revealStep);
                return (
                  <span
                    key={`${rIdx}-${cIdx}`}
                    className={`puzzlepage-cell ${color ? `highlight-${color}` : ""}`}
                  >
                    {letter}
                  </span>
                );
              })
            )}
          </div>
        </div>

        {!started && (
          <>
            <p className="puzzlepage-subtitle">Spot the hidden word?</p>
            <button className="puzzlepage-reveal-btn" onClick={startReveal}>
              Reveal it genious 🤔
            </button>
          </>
        )}

        {showPopup && (
          <div className="puzzlepage-message-box fade-in-up">
            <p className="puzzlepage-message-text">Happy friendship day, You fool! 💛</p>
            <button
              className="puzzlepage-continue-btn fade-in-up-delayed"
              onClick={() => navigate("/agreement")}
            >
              Continue -&gt;
            </button>
          </div>
        )}
      </div>
    </PageBackground>
  );
}

export default PuzzlePage;