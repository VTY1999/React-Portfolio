import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const COLORS = {
  primaryDark: '#000',
  primaryLight: '#7606d1',
};

const MenuLabel = styled.label`
@media screen and (max-width: 800px) {
  position: fixed;
  top: 25px;
  right: 3rem;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
}
`;

const NavBackground = styled.div`
@media screen and (max-width: 800px) {
  position: fixed;
  top: -15px;
  right: -5px;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? 'scale(80)' : 'scale(0)')};
  transition: transform 1s;
}
`;

const Icon = styled.span`
@media screen and (min-width: 800px) {
  display: none;
}
@media screen and (max-width: 800px) {
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
  width: 2rem;
  height: 1px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #fff;
    width: 2rem;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? '0' : '-1rem')};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? '0' : '1rem')};
  }
}
`;

const Navigation = styled.nav`
@media screen and (min-width: 800px) {
  display: none;
}
@media screen and (max-width: 800px) {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? '100%' : '0')};
  opacity: ${(props) => (props.clicked ? '1' : '0')};
  transition: width 0.8s, opacity 0.8s;
}
`;

const List = styled.ul`
@media screen and (min-width: 800px) {
  display: none;
}
@media screen and (max-width: 800px) {
  position: absolute;
  list-style: none;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
`;

const ItemLink = styled(NavLink)`
@media screen and (min-width: 800px) {
  display: none;
}
@media screen and (max-width: 800px) {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: lighter;
  text-decoration: none;
  color: #ffffff9b;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
}
`;

function MoblieMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick} className="Menulabel">
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click} className="NavBackground">&nbsp;</NavBackground>

      <Navigation clicked={click} className="mobile-menulist">
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              HOME
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/Portfolio">
              PORTFOLIO
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/Skills">
              SKILLS
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/Contact">
              CONTACT
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default MoblieMenu;
