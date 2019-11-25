import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
import { CloseButton, CloseIcon, ProjectInfo, Title, Skills, Paragraph, LearnMore, ButtonsDiv, LinkButton } from "./ModalButton.styled"
import ModalCarousel from "../Carousel/Carousel";

const StyledModal = Modal.styled`
  width: 70rem;
  min-height: 72rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: space-between;
  background-color: rgba(50,50,50,1);
  opacity: ${props => props.opacity};
  transition: opacity ease 1s;
  box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  border-radius: .2rem;
  position: relative;
`;



export const ModalButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }

  return (
    <div>
      <LearnMore onClick={toggleModal}>Learn More</LearnMore>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        >
      
        <ModalCarousel project={props.project}/>
        <ProjectInfo>
          <Title>{props.project.title}</Title>
          <Skills style={{display: "flex", flexDirection: "row"}}>{props.project.skills.map((skill, i) => (
            <p style={{ marginRight: ".5rem", marginTop: ".5rem" }} key={i}>{skill}</p>
          ))}
          </Skills>
          <Paragraph>{props.project.description}</Paragraph>
          <ButtonsDiv>
            <a href={props.project.deployedUrl} target="_blank">
              <LinkButton>View Site</LinkButton>
            </a>
            <a href={props.project.githubUrl} target="_blank">
            <LinkButton>View Code</LinkButton>
            </a>
          </ButtonsDiv>
        </ProjectInfo>
        <CloseButton onClick={toggleModal}><CloseIcon /></CloseButton>
      </StyledModal>
    </div>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;