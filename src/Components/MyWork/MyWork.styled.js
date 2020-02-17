import styled from "styled-components";
import {
  colors,
  fonts
} from "../../Shared_Styles/Style_Variables/colors";
import { Paragraph } from "./Display/ModalButton/ModalButton.styled";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: relative;
  top: 7rem;
`;

export const DisplayContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 156rem;
  margin: 10px;
`;

export const FilterButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  padding: .5rem 4rem;
  margin: 20px 25px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  transition: transform .3s ease;


  &:hover {
    transform: scale(1.1);
    transition: transform .1s ease;
  }

  &.active {
    color: ${colors.dark};
    background-color: ${colors.primary};
  }
`;

export const Para = styled(Paragraph)`
  max-width: 60rem;
`;