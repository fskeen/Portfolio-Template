import styled from "styled-components";
import {HoverDiv} from '../Display.styled';
import {
  colors,
  randomColor,
  fonts
} from "../../../../Shared_Styles/Style_Variables/colors";

export const CloseButton = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-style: none;
    &:focus { 
        outline: none;
    }
    &:hover {        
        cursor: pointer;
        background-color: rgba(0,0,0,.3);
        border-radius: 0.3rem;
    }
`

export const CloseIcon = styled.div`
    position: relative;
    width: 25px;
    height: 22px;
    border-style: none;
    &:before, &:after {
        position: absolute;
        content: ' ';
        height: 23px;
        width: .15rem;
        background-color: white;
    }
    &:before {
    transform: rotate(45deg);
    }
    &:after {
    transform: rotate(-45deg);
    }
    ${CloseButton}:hover & {
        &:before, &:after {
            background-color: ${colors.primary};
        }
    }
`
export const ProjectInfo = styled.div`
padding: 2rem;
width: 95%;
height: 28rem;
`
export const Title = styled.h3`
color: ${randomColor};
font-family: ${fonts.title};
font-size: 3rem;
font-weight: 700;
`
export const Skills = styled.h5`
color: ${colors.text};
font-family: ${fonts.title};
font-size: 1.5rem;
line-height: 2.75rem;
`
export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1.6rem;
  line-height: 2.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const LearnMore = styled.button`
    width: 13rem;
    height: 4rem;
    font-size: 1.8rem;
    padding: 0.2rem;
    background-color: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-radius: 0.3rem;
    transition: opacity 1.2s, transform 0.5s ease 0s;
    ${HoverDiv}:hover & {
        opacity: 1;
        transform: translateY(-60px);
        transition: opacity 1.2s, transform 0.5s ease 0s, background-color .5s ease;
    }
    &:hover {        
        cursor: pointer;
        background-color: ${randomColor};
        color: black;
        border-color: black;
    }
`
export const ButtonsDiv = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 1.5rem;
`
export const LinkButton = styled.button` 
    width: 13rem;
    height: 4rem;
    font-size: 1.8rem;
    font-family: ${fonts.title};
    padding: 0.2rem;
    background-color: ${colors.primary};
    color: black;
    border: 1px solid black;
    border-radius: 0.3rem;
    transition: opacity 1.2s, transform 0.5s ease 0s;
    ${HoverDiv}:hover & {
        opacity: 1;
        transform: translateY(-60px);
        transition: opacity 1.2s, transform 0.5s ease 0s, background-color .5s ease;
    }
    &:hover {        
        cursor: pointer;
        background-color: ${randomColor};
        color: black;
    }
`


