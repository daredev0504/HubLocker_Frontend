import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Navbar from '../components/Nav/Navbar';
import '../styles/app.css'

const RentLocker = () => {

    return (
      <>
        <div>
          <div>
            <Navbar />
          </div>
          <p className="success">navigation to the rental page is successful</p>
          <div>
            <p className="btn">
              <Link
                style={{
                  color: "#C4C4C4",
                  textDecoration: "none",
                }}
                to="/home"
              >
                {" "}
                Go back to Home
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}

export default RentLocker
