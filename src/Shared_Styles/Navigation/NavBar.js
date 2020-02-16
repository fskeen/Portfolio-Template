import React from "react";
import { NavLink } from "react-router-dom";
import { colors, fonts } from "../Style_Variables/colors";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser, faEye, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <Nav>
      <LinksList>
        <ListItem>
          <StyledNavLink activeClassName="active" exact to="/">
            <IconSpan>
              <FontAwesomeIcon icon={faHome} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">HOME</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/about">
            <IconSpan>
              <FontAwesomeIcon icon={faUser} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">ABOUT ME</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/work">
            <IconSpan>
              <FontAwesomeIcon icon={faEye} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">MY WORK</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/contact">
            <IconSpan>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">CONTACT ME</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>
      </LinksList>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${colors.dark};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 55px;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 10;
`;

const LinksList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  width: 50%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  box-sizing: border-box;
  width: 20%;
`;

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.navRegular};
  font-size: 2.25em;
  position: relative;
  top: 0.8rem;
  transition: opacity 0.3s ease-out;
  width: 100%;

  ${ListItem}:hover & {
    color: ${colors.primary};

  }
`;

const TextSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  font-family: ${fonts.body};
  position: relative;
  opacity: 0;
  top: -1rem;
  align-self: center;
  box-sizing: border-box;

  ${ListItem}:hover & {
    color: ${colors.primary};
    opacity: 1;
    text-align: center;
    transition: opacity 0.5s ease-out, transform .5s ease;
    transform: translateX(6rem);
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    ${IconSpan} {
      color: ${colors.primary};
    }
  }
`;

export default NavBar;
