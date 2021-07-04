import React, { useState } from "react";
import {data} from "../data/lockerData";
import img from '../kitchen-interior.jpg'

const LockerOverview = () => {
  const [dataArr, setdataArr] = useState(data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3em 2em",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "15%",
          color: "#005ECD",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        <div>
          <img src={img} alt="" height="200" width="100%" />
        </div>
        <div>22A Adeola Odeku Street, VI, Lagos.</div>
        <div>5 stars</div>
        <div>0.3 Miles</div>
      </div>
      <div style={{ width: "82%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "20%", marginBottom: "2em" }}>
            <form name="form1" id="form1" action="/action_page.php">
              <select
                style={{
                  width: "70%",
                  padding: ".5em",
                  outline: "none",
                  border: "0",
                  backgroundColor: "#DDDBDB",
                }}
                name="sort"
                id="sort"
              >
                <option value="" selected="selected">
                  Backend
                </option>
                <option value="">Frontend</option>
              </select>
            </form>
          </div>
          <div>
            <a href="#">View the guide size</a>
          </div>
        </div>
        <div>
          {dataArr.map((item) => (
            <Locker key={item.id} locker={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LockerOverview;

const Locker = (props) => {
  const { name, details, price, numAvailable } = props.locker;
  return (
    <div
      style={{
        background: "#EFEFEF",
        marginTop: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1em",
        fontWeight: "bold",
        fontSize:"14px",
        color:"#242424"
      }}
    >
      <div style={{ width: "10%" }}>{name}</div>
      <div style={{ width: "20%" }}>{details}</div>
      <div style={{ width: "20%"}}>{price}</div>
      <div style={{ width: "20%" }}>
        {numAvailable} Available
      </div>
      <div
        style={{
          background: "#5EBF5C",
          color: "white",
          padding: ".4em 2em",
          fontSize: "12px",
        }}
      >
        Rent Now
      </div>
    </div>
  );
};
