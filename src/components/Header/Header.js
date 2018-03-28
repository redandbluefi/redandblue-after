import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

const Container = styled.div`
  text-align: center;
  background-color: #DDD;
  padding: 20px;
  color: #555;
`;

const Header = () => (
  <div>
    <Container>
      <img src={logo} className="Header-logo" alt="logo" style={{ height: '80px' }}/>
      <h2>Welcome to redandblue frontend starter</h2>
      <h3>Implemented with Razzle + After.js</h3>
    </Container>
    <Link to="/">Home</Link> -
    <Link to="/about">About</Link> -
    <Link to="/terms">Terms</Link>
  </div>
);

export default Header;
