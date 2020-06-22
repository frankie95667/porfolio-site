import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/AK-profile-square-sm.jpg";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <NavWrapper>
      <Nav>
        <Brand>
          <LogoImage src={LogoImg} />
          <LogoText>
            <Name>Anthony Kawa</Name>
            <Profession>Full Stack Development</Profession>
          </LogoText>
        </Brand>
        <Links>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/resume">Résumé</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <Email href="mailto:anthonyk2020@gmail.com">
            anthonyk2020@gmail.com
          </Email>
        </Links>
      </Nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  width: 100%;
  border-bottom: 2px solid #eee;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  list-style: none;
  max-width: 1200px;
  margin: 0 auto;
`;

const Brand = styled.div`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  width: auto;
  order: 0;
  margin: 0;
  display: flex;
  
  a {
    text-decoration: none;
    font-size: 1rem;
    margin-right: 0.1rem;
    padding: 0.5rem 1.1rem;
    display: flex;
    align-items: center;
    transition: color 0.5s;
  }

  a:hover {
    color: #63d488;
  }

  a.active {
    color: #63d488;
  }
`;

const Email = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #c9c9c9;

  @media (max-width: 550px) {
    display: none !important;
  }
`;

const LogoImage = styled.img`
  height: auto;
  width: 64px;
  border-radius: 64px;
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Profession = styled.div`
  font-size: 1.1rem;
  color: #c9c9c9;
`;

const LogoText = styled.div`
  margin-left: 15px;

  @media (max-width: 780px) {
    display: none;
  }
`;
