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
          <StyledNavLink activeClassName="active" a exact to="/">
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
              <LinkText className="LinkText">ABOUT</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/skills">
            <IconSpan>
              <FontAwesomeIcon icon={faCog} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">SKILLS</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/work">
            <IconSpan>
              <FontAwesomeIcon icon={faEye} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">WORK</LinkText>
            </TextSpan>
          </StyledNavLink>
        </ListItem>

        <ListItem>
          <StyledNavLink to="/contact">
            <IconSpan>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconSpan>
            <TextSpan>
              <LinkText className="LinkText">CONTACT</LinkText>
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
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  width: 70px;
  top: 0;
`;

const LinksList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  box-sizing: border-box;
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

  ${ListItem}:hover & {
    opacity: 0;
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
    transition: opacity 0.3s ease-out;
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
