import React from "react";
import Image from "../../Assets/Images/Miriway.svg";
import { Link } from "react-router-dom";
import "./WelcomeUser.scss";
import RideCard from "../RideCard/RideCard";
import { auth } from "../../Firebase-services/firebase-main";

const WelcomeUser = () => {
  return (
    <div className="WelcomeUser">
      <nav>
        <Link to="/">
          <img src={Image} alt="" />
        </Link>
        <span
          onClick={() => {
            auth.signOut();
          }}
        >
          <p>S</p>
        </span>
      </nav>
      <div className="main">
        <h2>See All Available Riders</h2>
        <small>You have 49 ride request remaining</small>
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
        <RideCard />
      </div>
    </div>
  );
};

export default WelcomeUser;
