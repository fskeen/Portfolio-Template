import React from "react";
import styled from "styled-components";
import { CardContainer } from "./Display.styled";

const DisplayCard = props => {
  const { title, image, skills, deployedUrl, githubUrl } = props.project;
  console.log(image);
  const Card = styled.div`
  width: 100%
  height: 100%
  background-image: url(${image})

  `;
  return (
    <CardContainer>
      <Card />
    </CardContainer>
  );
};

export default DisplayCard;
