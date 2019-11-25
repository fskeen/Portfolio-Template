import React, {useState} from "react";
import styled from "styled-components";
import { Modal } from 'styled-react-modal';
import { ModalButton } from './ModalButton/ModalButton';
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
    githubUrl,
    description
  } = props.project;

  const [isOpen, setIsOpen] = useState(false);

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
