import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./GiftPage.css";

function GiftPage() {
  const navigate = useNavigate();

  return (
    <PageBackground>
      <div className="giftpage-content">
        <h1 className="giftpage-title">Here's a surprise for you</h1>

        <div className="giftpage-clickme-box" onClick={() => navigate("/memories")}>
          <img
            src="/images/giftImg.png"
            alt="Gift"
            className="giftpage-image"
          />
          <p className="giftpage-openme">Tap to claim your gift! ⭐</p>
        </div>
      </div>
    </PageBackground>
  );
}

export default GiftPage;