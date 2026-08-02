import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./FinalPage.css";

// Replace with the actual WhatsApp number, e.g. "911234567890"
const WHATSAPP_NUMBER = "911234567890";

function FinalPage() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageBackground>
      <div className="finalpage-content">
        <h1 className="finalpage-title">That's it</h1>
        <h2 className="finalpage-subtitle">You can leave now.</h2>
        <p className="finalpage-text">...although you owe me a reply 😅</p>

        {showButtons && (
          <div className="finalpage-buttons">
            <a
              className="finalpage-btn finalpage-btn-fade"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>

            <button
              className="finalpage-btn finalpage-btn-fade finalpage-btn-delayed"
              onClick={() => navigate("/")}
            >
              Experience it again
            </button>
          </div>
        )}
      </div>
    </PageBackground>
  );
}

export default FinalPage;