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

export const FilterButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled.div`
  color: ${colors.text};
  font-family: ${fonts.title};
  font-size: 2rem;
  padding: 0 40px;
  margin: 20px 25px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`;
