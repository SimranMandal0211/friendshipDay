import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./HeroPage.css";

function HeroPage() {
  const navigate = useNavigate();

  return (
    <PageBackground>
      <div className="heropage-content">
        <h1 className="heropage-title bungee-font">OYEE!</h1>
        <h2 className="heropage-subtitle caveat-bold">I made something for you</h2>
        <h3 className="heropage-question caveat-regular">Do you want to see?</h3>

        <div className="heropage-buttons">
        <button className="btn-yes poppins-bold" onClick={() => navigate("/yes")}>
            Yes
        </button>
        <button className="btn-no poppins-bold" onClick={() => navigate("/no")}>
            No
        </button>
        </div>
      </div>
    </PageBackground>
  );
}

export default HeroPage;