import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../Style_Variables/colors";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Nav>
      <LinksList>
        <ListItem>
          <Link to="/">
            <IconSpan>
              <FontAwesomeIcon icon={faHome} size="s" />
            </IconSpan>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/">
            <LinkText className="LinkText">Home</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about">
            <LinkText className="LinkText">About</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/skills">
            <LinkText className="LinkText">Skills</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/work">
            <LinkText className="LinkText">Work</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">
            <LinkText className="Text">Contact</LinkText>
          </Link>
        </ListItem>
      </LinksList>
      <div>icons</div>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${colors.dark};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  max-width: 100px;
  position: fixed;
  padding: 0.75rem;
`;

const LinksList = styled.ul`
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

const ListItem = styled.li`
  padding: 5px 0;
  margin: 10px 0;
`;

const IconSpan = styled.span`
  color: ${colors.primary};
  font-size: 3em;
  &:hover {
    color: ${colors.text};
  }
`;

const LinkText = styled.p`
  color: ${colors.primary};

  &:hover {
    color: ${colors.text};
  }
`;
export default NavBar;
