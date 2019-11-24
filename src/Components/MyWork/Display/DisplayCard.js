import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  Button,
  Card,
  HoverDiv,
  ProjectInfo,
  SkillList,
  Image
} from "./Display.styled";
import { colors, fonts } from "../../../Shared_Styles/Style_Variables/colors";

const DisplayCard = props => {
  const {
    title,
    image,
    primarySkills,
    skills,
    deployedUrl,
    githubUrl
  } = props.project;

  return (
    <Card>
      <HoverDiv>
        <ProjectInfo>
          <h1>{title}</h1>
          <SkillList>
            {primarySkills.map(skill => (
              <p style={{ margin: ".5rem" }}>{skill}</p>
            ))}
          </SkillList>
        </ProjectInfo>
        <Button>Learn More</Button>
      </HoverDiv>
      <Image src={image} />
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
