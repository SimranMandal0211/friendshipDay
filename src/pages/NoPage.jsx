import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./NoPage.css";

function NoPage() {
  const navigate = useNavigate();

  return (
    <PageBackground>
      <div className="nopage-content">
        <img
          src="/images/no.jpg"
          alt="How dare you ??"
          className="nopage-image"
        />
        <h2 className="nopage-text">How dare you??</h2>
        <button className="btn-goback" onClick={() => navigate("/")}>
          Go back
        </button>
      </div>
    </PageBackground>
  );
}

export default NoPage;