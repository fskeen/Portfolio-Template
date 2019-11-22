import styled, { keyframes } from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../../Shared_Styles/Style_Variables/colors";

export const CardContainer = styled.div`
width: 390px
height: 300px
border: 1px solid pink
`;

export const Button = styled.button`
  margin: 0.5rem;
  width: 22rem;
  display: inline-block;
  padding: 1rem;
  font-size: 2.2rem;
  font-family: ${fonts.body};
  border: 2px solid rgb(113, 119, 98);
  background: none;
  border-radius: 0.7rem;
  transition: all 1s ease;
  color: ${randomColor};
  align-self: center;

  &:hover {
    cursor: pointer;
    color: black;
    border-color: black;
    background-color: #f9ffea;
    transition: all 0.2s ease;
    text-shadow: 2px 2px 0 ${colors.primary};
    box-shadow: 2px 2px 0px 0px ${colors.primary};
  }

  @media ${device.mobileS} {
    max-width: 60rem;
  }
`;

export const HoverCard = styled.div`
  width: 100%;
  height: 100%;
`;

// const fadein = keyframes`
//   0% {
//     opacity: 1

//   }
//   100% {
//     opacity: 0
//   }
// `;
