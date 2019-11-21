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

const fadein = keyframes`
  0% {
    opacity: 1

  }
  100% {
    opacity: 0
  }
`;
