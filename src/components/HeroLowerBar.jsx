import React from "react";

const HeroLowerBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        padding: "1em",
      }}
    >
      <div style={{ fontWeight: "500", color: "grey", fontSize: "18px" }}>
       {props.lockerlength ? props.lockerlength +" "+"Open Lockers Available":"No Lockers Found"}
      </div>
      <div style={{ width: "20%" }}>
        <form name="form1" action="/action_page.php">
          <span style={{ fontWeight: "500", color: "grey", fontSize: "18px" }}>
            Sort By &nbsp;
          </span>
          <select
            style={{
              width: "70%",
              padding: ".5em",
              outline: "none",
              border: "0",
              backgroundColor: "#DDDBDB",
            }}
            name="sort"
          >
            <option value="" selected="selected">
              Backend
            </option>
            <option value="">Frontend</option>
          </select>
        </form>
      </div>
    </div>
  );
};

HeroLowerBar.defaultProps = {
  lockerlength: "0"
};
export default HeroLowerBar;
