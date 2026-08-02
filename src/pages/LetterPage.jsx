import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LetterPage.css";

const lines = [
  { type: "normal", text: "Dear Friend! " },
  { type: "normal", text: "Life has a strange way of introducing us to hundread of people." },
  { type: "normal", text: "Some stay for conversation. some stay for a chapter." },
  { type: "normal", text: "And Somehow a very small number become part of the story itself." },
  { type: "highlight", text: "You are one of the chosen people for me." },
  { type: "box", text: "Thank you for being exectly the kind of weird that match mine. I love you 3000 & you know it 😉" },
  { type: "normal", text: "I don't know what life will look like years from now. But I'm really glad there was a version of my life where our paths crossed. And I hope there are many more version after this one." },
  { type: "highlight", text: "Happy Friendship Day!" },
];

function LetterPage() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(1);
  const [typedText, setTypedText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const isTyping = visibleCount <= lines.length;

  useEffect(() => {
    if (visibleCount > lines.length) return;

    const currentLine = lines[visibleCount - 1].text;
    let charIndex = 0;
    setTypedText("");

    let timeoutId;

    const typeNextChar = () => {
      charIndex++;
      setTypedText(currentLine.slice(0, charIndex));

      if (charIndex >= currentLine.length) {
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, 700);
        return;
      }

      // slight random variation in speed for a more natural typing feel
      const delay = 28 + Math.random() * 35;
      timeoutId = setTimeout(typeNextChar, delay);
    };

    timeoutId = setTimeout(typeNextChar, 28);

    return () => clearTimeout(timeoutId);
  }, [visibleCount]);

  return (
    <div className="letterpage-background">
      <div className="letterpage-content">
        <div className="letterpage-lines">
          {lines.slice(0, visibleCount - 1).map((line, index) => (
            <LineDisplay key={index} line={line} text={line.text} />
          ))}

          {isTyping && (
            <LineDisplay
              line={lines[visibleCount - 1]}
              text={typedText}
              typing
            />
          )}
        </div>

        {!isTyping && (
          <p className="letterpage-signature letterpage-fade-in">- Simran</p>
        )}

        {!isTyping && (
          <button
            className="letterpage-cry-btn letterpage-fade-in"
            onClick={() => setShowPopup(true)}
          >
            I'm not emotional
          </button>
        )}

        {showPopup && (
          <div className="letterpage-popup-overlay">
            <div className="letterpage-popup-box letterpage-popup-pop">
              <h2 className="letterpage-popup-title">System Message</h2>
              <p className="letterpage-popup-text">
                Emotional moment detected. This is getting uncomfortable.
              </p>
              <button
                className="letterpage-popup-btn"
                onClick={() => navigate("/puzzle")}
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

function LineDisplay({ line, text, typing }) {
  const content = (
    <>
      {text}
      {typing && <span className="letterpage-cursor">|</span>}
    </>
  );

  if (line.type === "highlight") {
    return (
      <p className="letterpage-line letterpage-highlight letterpage-fade-in">
        {content}
      </p>
    );
  }
  if (line.type === "box") {
    return (
      <div className="letterpage-sticky letterpage-fade-in">
        <span className="letterpage-tape"></span>
        <p className="letterpage-line">{content}</p>
      </div>
    );
  }
  return <p className="letterpage-line letterpage-fade-in">{content}</p>;
}

export default LetterPage;