import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import PageBackground from "../components/PageBackground";
import "./WishPage.css";

function WishPage() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <PageBackground>
      <div className="wishpage-content">
        <img
          src="/images/wish-image.jpg"
          alt="Friendship Day"
          className="wishpage-image"
        />
        <h1 className="wishpage-title">Happy Friendship Day 💛</h1>
        <p className="wishpage-notification">You are my fav notification 🤗</p>
        <p className="wishpage-text">Stay cute, stay happy and stay healthy.</p>
        <p className="wishpage-clickme" onClick={() => navigate("/gift")}>
          Click me
        </p>
      </div>
    </PageBackground>
  );
}

export default WishPage;