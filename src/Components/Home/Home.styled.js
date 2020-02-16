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
  align-items: center;
  /* height: 90vh; */
  padding: 7rem 0 0 0 ;
  overflow-y: scroll;
  /* margin: 0 auto; */
  /* HIDING SCROLL BAR */
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media ${device.mobileL} {
    max-width: 60rem;
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
