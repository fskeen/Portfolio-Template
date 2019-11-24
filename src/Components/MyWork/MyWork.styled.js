import styled from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  width: 100%
  height: 100vh
  display: flex;
  justify-content: center;
  align-items: center
`;

export const DisplayContainer = styled.main`
  display: flex;
  width: 90%
  height: 90vh
  border: 1px solid cyan;
  margin: 10px
`;
