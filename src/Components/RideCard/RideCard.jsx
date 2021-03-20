import React from "react";
import "./RideCard.scss";

const RideCard = () => {
  return (
    <div className="RideCard">
      <div className="top">
        <small>Mira Road</small>
        <small>Minimum : 18/km</small>
      </div>
      <h5>Rahul</h5>
      <div className="bottom">
        <span>Ride Completed : 25</span>
        <button>Request</button>
      </div>
    </div>
  );
};

export default RideCard;
