import React from "react";
import logo from "../hublocker logo.svg";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#BCA83D",
        width: "100%",
        padding: ".5em 0",
        fontFamily: "Roboto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 2em",
        }}
      >
        <div>
          <img src={logo} alt="" height="50" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
            fontWeight: "bold",
          }}
        >
          <div>Home</div>
          <div>Find a Locker</div>
          <div>Size Guide</div>
          <div>Locations</div>
          <div>Help Center</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "23%",
            fontWeight: "bold",
          }}
        >
          <div>My Account</div>
          <div>9038283</div>
          <div
            style={{
              backgroundColor: "#A3975D",
              color: "#C4C4C4",
              padding: ".8em 1.5em",
              borderRadius: "2em",
              fontSize:"13px"
            }}
          >
            PAY YOUR BILL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
