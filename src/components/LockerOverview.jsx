import React, { useState, useContext, useEffect} from "react";
import { data } from "../data/lockerData";
import img from "../kitchen-interior.jpg";
import "../styles/app.css";
import CreateSearchContext from "../context/Search/SearchContext";

const LockerOverview = (props) => {
//const [dataArr, setdataArr] = useState(data);
const [lockers, setLockers] = useState([])

useEffect(() => {
 setLockers(props.locations)
}, [props.locations])

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
                <option value="" selected="selected">
                  Backend
                </option>
                <option value="">Frontend</option>
              </select>
            </form>
          </div>
          <div className="guide_size_link">
            <a href="#">View the guide size</a>
          </div>
        </div>
        <div>
          {lockers.map((item) => (
            <Locker key={item.id} locker={item} />
          ))}
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
  const {id, name, size, numAvailable } = props.locker;
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
