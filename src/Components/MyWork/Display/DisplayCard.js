import React from "react";
import styled from "styled-components";
import { CardContainer, Button, HoverCard } from "./Display.styled";

const DisplayCard = props => {
  const { title, image, skills, deployedUrl, githubUrl } = props.project;

  const Card = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${image});
    opacity: 1;
    button {
      display: none;
    }
    &:hover {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
      button {
        opacity: 1
        display: block;
      }
    }
  `;
  return (
    <CardContainer>
      <Card style={{ border: "2px solid orange" }} />
      <HoverCard style={{ border: "2px solid pink" }}>
        <Button>Learn More</Button>
      </HoverCard>
    </CardContainer>
  );
};

export default DisplayCard;
