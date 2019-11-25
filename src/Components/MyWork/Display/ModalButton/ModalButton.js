import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
import {Paragraph} from '../../../../Shared_Styles/TextStyles'

const StyledModal = Modal.styled`
  width: 70rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkgrey;
  opacity: ${props => props.opacity};
  transition: opacity ease 1s;
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
      <button onClick={toggleModal}>Open modal</button>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Paragraph>{props.project.description}</Paragraph>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </div>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;