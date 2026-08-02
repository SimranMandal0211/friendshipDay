import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import "./MemoriesPage.css";

const photos = [
  "/images/memory1.jpg",
  "/images/memory1.jpg",
  "/images/memory1.jpg",
  "/images/memory1.jpg",
  "/images/memory1.jpg",
];

function MemoriesPage() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);
  const [folding, setFolding] = useState(false);

  const handleTopClick = () => {
    if (folding) return;
    setFolding(true);
    setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setFolding(false);
    }, 500);
  };

  const getTransform = (stackPos) => {
    if (stackPos === 0) return folding ? "fold" : "top";
    if (stackPos === 1) return "second";
    return "third";
  };

  return (
    <PageBackground>
      <div className="memoriespage-content">
        <div className="memoriespage-stack">
          {order.map((photoIndex, stackPos) => (
            <div
              key={photoIndex}
              className={`memoriespage-frame pos-${getTransform(stackPos)}`}
              style={{ zIndex: order.length - stackPos }}
              onClick={stackPos === 0 ? handleTopClick : undefined}
            >
              <img
                src={photos[photoIndex]}
                alt={`Memory ${photoIndex + 1}`}
                className="memoriespage-photo"
              />
              <span className="memoriespage-heart">💗</span>
            </div>
          ))}
        </div>

        <h1 className="memoriespage-title">Our Moments 💗</h1>
        <p className="memoriespage-subtitle">You don't know how much you mean to me</p>

        <div className="memoriespage-clickme-box" onClick={() => navigate("/letter")}>
          <img src="/images/gift2.png" alt="Gift" className="memoriespage-gift-icon" />
          <p className="memoriespage-clickme">tap to claim more gifts</p>
        </div>
      </div>
    </PageBackground>
  );
}

export default MemoriesPage;