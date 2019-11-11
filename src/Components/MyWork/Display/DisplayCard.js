import React from "react";
import { CardContainer, Image } from "./Display.styled";

const DisplayCard = props => {
  const { title, image, skills, deployedUrl, githubUrl } = props.project;
  return (
    <CardContainer>
      {console.log("image ", image)}
      <Image src={image}></Image>
    </CardContainer>
  );
};

export default DisplayCard;
