import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./YesPage.css";

function YesPage() {
  const navigate = useNavigate();

  return (
    <PageBackground>
      <div className="yespage-content">
        <img
          src="/images/yes.jpg"
          alt="Good girl"
          className="yespage-image"
        />
        <h2 className="yespage-text">That's the good girl</h2>
        <button className="btn-next" onClick={() => navigate("/wish")}>
          Click
        </button>
      </div>
    </PageBackground>
  );
}

export default YesPage;