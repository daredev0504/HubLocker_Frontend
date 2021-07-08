import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../hublocker logo.svg'

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: #bca83d;
  padding: 0 25px;
  margin: 0px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} alt="" height="50" />
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbar
