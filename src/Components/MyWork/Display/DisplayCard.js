import React from "react";
import { ModalButton } from './ModalButton/ModalButton';
import {
  Card,
  HoverDiv,
  ProjectInfo,
  SkillList,
  Image
} from "./Display.styled";

const DisplayCard = props => {
  const {
    title,
    image,
    primarySkills
  } = props.project;

  return (
    <Card>
      <HoverDiv>
        <ProjectInfo>
          <h1>{title}</h1>
          <SkillList>
            {primarySkills.map((skill, i) => (
              <p style={{ margin: ".5rem" }} key={i}>{skill}</p>
            ))}
          </SkillList>
        </ProjectInfo>
        {/* <Button>Learn More</Button> */}
        <ModalButton project={props.project}/>
      </HoverDiv>
      <Image src={image} height="300" alt="cover image from project" />
    </Card>
  );
};

/**
 * CARD >
 * image
 * pop up content -- button, text, etc
 * < CARD
 */

export default DisplayCard;
