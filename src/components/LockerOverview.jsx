import React, { useState, useEffect } from "react";
import img from "../kitchen-interior.jpg";
import "../styles/app.css";
import { Link } from "react-router-dom";

const LockerOverview = (props) => {
  const [lockers, setLockers] = useState([]);

  useEffect(() => {
    setLockers(props.locations);
  }, [props.locations]);

  const showLockers = () => {
    if (lockers.length > 0) {
      return lockers.map((item) => <Locker key={item.id} locker={item} />);
    }
     else{
      return <div style={{ color: "#ddd", fontSize:"50px", textAlign:"center" }}>Lockers will Appear here</div>;
    }
  };

  return (
    <div className="overview">
      <div className="details">
        <div>
          <img src={img} alt="" height="200" width="100%" />
        </div>
        <div>22A Adeola Odeku Street, VI, Lagos.</div>
        <div>5 stars</div>
        <div>0.3 Miles</div>
      </div>
      <div className="details2">
        <div className="details2_inner">
          <div className="dropdown">
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
                <option value="" defaultValue>
                  Backend
                </option>
                <option value="">Frontend</option>
              </select>
            </form>
          </div>
          <div className="guide_size_link">
            <Link to="/none">View the guide size</Link>
          </div>
        </div>
        <div>
        {showLockers()}
        </div>
        <div
          style={{
            marginTop: "1em",
            color: "#005ECD",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          View all lockers at this location
        </div>
      </div>
    </div>
  );
};

export default LockerOverview;

const Locker = (props) => {
  const { id, name, size, numAvailable } = props.locker;
  return (
    <div>
      <div className="table-wrapper">
        <table className="fl-table">
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{size}</td>
              <td>{numAvailable} Available</td>
              <td>
                <div>
                  <Link
                    style={{
                      background: "#5EBF5C",
                      color: "white",
                      padding: ".4em 2em",
                      fontSize: "12px",
                      textDecoration: "none",
                    }}
                    to="/rent"
                  >
                    {" "}
                    Rent Now
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
