import React from 'react'
import NavBar from "../components/Nav/Navbar";
import Hero from "../components/Hero";

const Home = () => {
    return (
      <div>
        <div className="">
          <div>
            <NavBar />
          </div>
          <div>
            <Hero />
          </div>
        </div>
      </div>
    );
}

export default Home
