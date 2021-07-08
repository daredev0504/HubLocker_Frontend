import React,{useContext, useState, useEffect} from "react";
import pic from "../beautiful-shot-modern-house-kitchen-dining-room.jpg";
import searchIcon from "../find locker.svg";
import HeroLowerBar from "./HeroLowerBar";
import styled from "styled-components";
import LockerOverview from "./LockerOverview";
import CreateSearchContext from "../context/Search/SearchContext";


const DIV = styled.div`
  background-color: white;
  padding: 1em;
  margin-left: 2em;
  border: none;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hero = () => {
const context = useContext(CreateSearchContext);
const datas = context.location

const [locations, setLocations] = useState([]);

console.log(datas)
useEffect(() => {
  // let toArray = []
  // if(datas.data.length > 1){
  //    for (let i = 0, len = datas.data.length; i < len; i++) {
  //      toArray.push(datas.data[i]);
  //    }
  //    setLocations(toArray.lockers);
  // }
 setLocations(datas.data[0].lockers)
}, [datas])

//const [lockers, setsockers] = useState(datas.data[0].lockers);

console.log("====================================");
//console.log(datas)
//console.log(locations.data[0].lockers.length)
//console.log(locations.length)
//console.log(lockers)
console.log(locations)
console.log("===================================");

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
        <DIV>
          <input
            name="searchParameter"
            value={context.searchParameter}
            onChange={(event) => context.handleChange(event)}
            required
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
          <div onClick={context.handleSubmit}>
            <img src={searchIcon} alt="search" height="80" />
          </div>
        </DIV>
      </div>
      <HeroLowerBar lockerlength={locations.length} />
      <div>
        <LockerOverview locations={locations} />
      </div>
    </div>
  );
};

export default Hero;
