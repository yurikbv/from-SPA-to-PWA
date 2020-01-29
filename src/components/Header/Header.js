import React from 'react';
import styled from "styled-components";
import logo from '../../GitHub-Mark-Light-64px.png'

const Header = ( ) => {

  const HeaderWrapper = styled.header`
    background-color: #282c34;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

  const Logo = styled.img`
    height: 64px;
    pointer-events: none;
    margin-top: 2rem;
`;

  return (
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <h1>My GitHub Portfolio</h1>
      </HeaderWrapper>
  );
};

export default Header;