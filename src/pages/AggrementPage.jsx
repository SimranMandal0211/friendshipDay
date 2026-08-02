import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import './AggrementPage.css';

const checkboxItems = [
  "Continue sending unnecessary memes.",
  "Provide emotional support",
  "Pretend to listen repeated stories",
  "Participate in quationable plans",
  "Remain available for random bro listen",
  "Maintain confidentiality regarding embarrasing information",
];

function AgreementPage() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(Array(checkboxItems.length).fill(false));
  const [showStamp, setShowStamp] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const toggleCheckbox = (index) => {
    setChecked((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const handleAccept = () => {
    const allChecked = checked.every((val) => val === true);

    if (!allChecked) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
      return;
    }

    setShowStamp(true);
    setTimeout(() => {
      navigate("/final");
    }, 2000);
  };

  return (
    <PageBackground>
      <div className="agreementpage-content">
        <h1 className="agreementpage-title">Friendship Renewal Agreement</h1>
        <p className="agreementpage-subline">Please read carefully before proceeding.</p>
        <p className="agreementpage-bold-line">By continuing, you agree to...</p>

        <div className="agreementpage-checkboxes">
          {checkboxItems.map((text, index) => (
            <label key={index} className="agreementpage-checkbox-item">
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggleCheckbox(index)}
              />
              <span>{text}</span>
            </label>
          ))}
        </div>

        <div className="agreementpage-dashed-line"></div>

        <p className="agreementpage-term">Term: life time</p>
        <p className="agreementpage-term">Cancellation policy: none</p>

        <button className="agreementpage-accept-btn" onClick={handleAccept}>
          I Accept
        </button>

        {showWarning && (
            <div className="agreementpage-stamp-overlay">
                <div className="agreementpage-warning-box">
                <img
                    src="/images/angary.jpg"
                    alt="Warning"
                    className="agreementpage-warning-icon"
                />
                <p className="agreementpage-warning-text">Please select more options</p>
                </div>
            </div>
        )}

        {showStamp && (
          <div className="agreementpage-stamp-overlay">
            <div className="agreementpage-stamp-box">
              Friendship<br />Renewed
            </div>
          </div>
        )}
      </div>
    </PageBackground>
  );
}

export default AgreementPage;