import React from "react";
import pic from "../beautiful-shot-modern-house-kitchen-dining-room.jpg";
import searchIcon from "../find locker.svg";
import HeroLowerBar from "./HeroLowerBar";

const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          height: "450px",
        }}
      >
        <div>
          <p
            style={{
              marginTop: "0",
              fontSize: "3em",
              fontWeight: "600",
              paddingTop: "1.5em",
              paddingLeft: ".6em",
              marginBottom: ".5em",
            }}
          >
            Find a Locker
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1em",
            marginLeft: "2em",
            border: "none",
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            style={{
              backgroundColor: "white",
              marginLeft: "2em",
              border: "none",
              width: "100%",
              height: "100%",
              outline: "none",
            }}
            placeholder="Enter City or State"
            type="text"
          />
          <div>
            <img src={searchIcon} alt="search" height="80" />
          </div>
        </div>
      </div>
      <HeroLowerBar />
    </div>
  );
};

export default Hero;
