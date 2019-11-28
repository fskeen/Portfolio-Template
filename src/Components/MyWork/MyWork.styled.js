import styled from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  margin: 0 0 0 14rem;
`;

export const DisplayContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 156rem;
  margin: 10px;
`;
