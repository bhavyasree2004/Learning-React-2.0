import "./card.css";
import { useState } from "react";

function Card(props) {
  const [readMore, setReadMode] = useState(false);
  const [isInterested, setIsInterested] = useState(true);
  const item = props.displayItem;
  function handleReadMoreClick() {
    setReadMode(!readMore);
  }
  function handleInterest() {
    setIsInterested(!isInterested);
  }
  return isInterested ? (
    <div className="card">
      <img src={item.image} alt="img" height={40} className="card-image" />
      <div className="card-info">
        <div className="item-price">&#8377;{item.price}</div>
        <div className="item-name">{item.name}</div>
        <div className={`item-description ${readMore ? "expanded" : ""}`}>
          {item.info}
        </div>
        <span className="read-more" onClick={handleReadMoreClick}>
          <span> {readMore ? "Show Less" : "Read More"}</span>
        </span>
      </div>
      <div>
        <button className="red-btn" onClick={handleInterest}>
          Not Interested
        </button>
      </div>
    </div>
  ) : null;
}

export default Card;
