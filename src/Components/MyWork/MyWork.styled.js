import styled from "styled-components";
import {
  colors,
  fonts,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";
import { Paragraph } from "./Display/ModalButton/ModalButton.styled";



export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  /* position: relative; */
  padding-top: 7rem;
  background-color: ${colors.backgroundDark};
  position: relative;
  top: 10rem;
  box-shadow: 0px 0px 5px black, 0px 0px 0px black, 0px 0px 0px black;
  outline: 2px solid #00000050;
  outline-offset: -.75rem;
`;

export const DisplayContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 156rem;
  margin: 10px;
`;
export const FoldContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* flex-flow: row wrap; */
  /* overflow: hidden; */
  position: absolute;
  top: -10rem;
  left: 5rem;
  z-index: -1;
`;
export const Fold = styled.div`
  width: ${props => props.width + "px"};
  height: ${props => props.width + "px"};
  background-color: ${colors.backgroundSolid};
  transform: rotate(135deg) translateX(80px); 
  box-shadow: 0px 0px 0px black;
  border-radius: .23rem;
  box-shadow: 0px 0px 3px black, 0px 0px 0px black, 0px 0px 0px black;
  transition: box-shadow .5s ease-out;

  /* transform: translateX(45px); */
  ${MainContainer}:hover & {
    box-shadow: 0px 0px 3px black, 5px 5px 0px black, -5px -5px 0px black, 10px 10px 0px ${randomColor}, -10px -10px 0px ${randomColor}, 15px 15px 0px black, -15px -15px 0px black;
    transition: box-shadow .5s ease-out;
    /* border: 3px solid blue; */
  }
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