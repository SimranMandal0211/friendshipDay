import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LetterPage.css";

// Edit these lines/text freely — "type" controls how each line looks
const lines = [
  { type: "normal", text: "In this letter, I want to tell you something..." },
  { type: "highlight", text: "You've been the best part of my craziest days." },
  { type: "box", text: "Remember all those random calls at 2 AM? Yeah, those." },
  { type: "normal", text: "I don't say this enough, but I'm really grateful for you." },
  { type: "highlight", text: "Happy Friendship Day!" },
];

function LetterPage() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(1);
  const [typedText, setTypedText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (visibleCount > lines.length) return;

    const currentLine = lines[visibleCount - 1].text;
    let charIndex = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      charIndex++;
      setTypedText(currentLine.slice(0, charIndex));

      if (charIndex >= currentLine.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, 600);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [visibleCount]);

  return (
    <div className="letterpage-background">
        <div className="letterpage-content">
            <div className="letterpage-lines">
            {lines.slice(0, visibleCount - 1).map((line, index) => (
                <LineDisplay key={index} line={line} text={line.text} />
            ))}

            {visibleCount <= lines.length && (
                <LineDisplay line={lines[visibleCount - 1]} text={typedText} />
            )}
            </div>

            {visibleCount > lines.length && (
            <button className="letterpage-cry-btn" onClick={() => setShowPopup(true)}>
                I'm not crying
            </button>
            )}

            {showPopup && (
            <div className="letterpage-popup-overlay">
                <div className="letterpage-popup-box">
                <h2 className="letterpage-popup-title">System Message</h2>
                <p className="letterpage-popup-text">
                    Emotional moment detected. This is getting uncomfortable.
                </p>
                <button
                    className="letterpage-popup-btn"
                    onClick={() => navigate("/next-page")}
                >
                    Fix it immediately
                </button>
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

function LineDisplay({ line, text }) {
  if (line.type === "highlight") {
    return <p className="letterpage-line letterpage-highlight">{text}</p>;
  }
  if (line.type === "box") {
    return (
      <div className="letterpage-sticky">
        <span className="letterpage-tape"></span>
        <p className="letterpage-line">{text}</p>
      </div>
    );
  }
  return <p className="letterpage-line">{text}</p>;
}

export default LetterPage;