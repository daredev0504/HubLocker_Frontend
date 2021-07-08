import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 25px;
  }
  li:hover {
    background: #a3975d;
    cursor: pointer;
    color: #dadada;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <DIV style={{marginRight:"5em"}}>
        <li>Home</li>
        <li>Find a Locker</li>
        <li>Size Guide</li>
        <li>Locations</li>
        <li>Help Center</li>
      </DIV>
      <DIV>
        <li>My Account</li>
        <li>9038283</li>
        <li
          style={{
            backgroundColor: "#A3975D",
            color: "#C4C4C4",
            padding: ".8em 1.5em",
            borderRadius: "2em",
            fontSize: "13px",
          }}
        >
          PAY YOUR BILL
        </li>
      </DIV>
    </Ul>
  );
};

export default RightNav;
