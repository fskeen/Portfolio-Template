import styled, { keyframes } from "styled-components";
import { SkillsItem as Button1 } from "../../About/About.styled";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../../Shared_Styles/Style_Variables/colors";

export const Card = styled.div`
  width: 390px;
  height: 300px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  // margin: 0 .25rem .25rem 0;
`;

export const HoverDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Image = styled.img`
  object-fit: cover;
  opacity: 1;
  position: absolute;
  top: 0;
  transition: opacity 0.5s;
  ${Card}:hover & {
    /* transition: opacity 0.5s; */
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    opacity: 0.1;
    z-index: -2;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  opacity: 0;
  transition: opacity 1s, transform 0.5s ease 0s;
  h1 {
    color: ${colors.primary};
    font-family: ${fonts.title};
    font-size: 2.25rem;
    font-weight: 400;
    padding: 1rem;
    text-align: center;
  }

  ${HoverDiv}:hover & {
    opacity: 1;
    transform: translateY(60px);
    transition: opacity 1.2s, transform 0.5s ease 0s;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  p {
    color: ${colors.primary};
    font-size: 1.5rem;
    font-family: ${fonts.body};
  }
`;

export const Button = styled(Button1)`
  width: 35%;
  text-align: center;
  opacity: 0;
  transition: opacity 1s, transform 0.5s ease 0s;

  ${HoverDiv}:hover & {
    opacity: 1;
    transform: translateY(-60px);
    transition: opacity 1.2s, transform 0.5s ease 0s;
  }
`;
