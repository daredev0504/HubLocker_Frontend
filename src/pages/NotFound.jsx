import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import '../styles/app.css'

const NotFound = () => {
  const {pathname} = useLocation();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <p className="error">
          {" "}
          The page <span style={{ color: "GrayText" }}>{pathname}</span> you are
          looking for does not exist !
        </p>
      </div>

      <div>
        <p className="btn">
          <Link
            style={{
              color: "#C4C4C4",
              textDecoration: "none"
            
            }}
            to="/home"
          >
            {" "}
            Go back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
