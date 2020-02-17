import styled from "styled-components";
import {
  colors,
  fonts,
  device,
  randomColor
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  background-color: ${colors.background};
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 25vh 0;
  padding: 2rem;
  box-shadow: 0px 0px 3px black, 5px 5px 0px black, -5px -5px 0px black;
  border-radius: .23rem;
  transition: box-shadow .5s ease-out;
  @media ${device.mobileL} {
    max-width: 60rem;
  }

  &:hover {
  box-shadow: 0px 0px 3px black, 5px 5px 0px black, -5px -5px 0px black, 10px 10px 0px ${colors.background}, -10px -10px 0px ${colors.background}, 15px 15px 0px black, -15px -15px 0px black;

  }
`;

export const Button = styled.button`
  margin: 0.5rem auto;
  width: 18rem;
  display: inline-block;
  padding: 1rem;
  font-size: 2.2rem;
  font-family: ${fonts.body};
  border: 2px solid rgb(113, 119, 98);
  background: none;
  border-radius: 0.7rem;
  transition: all 1s ease;
  color: ${randomColor};
  align-self: flex-end;
  box-shadow: 0px 0px 3px black, 5px 5px 0px black, -5px -5px 0px black;

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
