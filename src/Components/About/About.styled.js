import styled from 'styled-components'
import { colors, randomColor, fonts } from '../../Shared_Styles/Style_Variables/colors'

export const MainContainer = styled.main`
  max-width: 80rem;
  width: 80%;
`;

export const PageTitle = styled.h2`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 6rem;
  font-weight: 800;
  padding: 1rem;
  margin: 3rem 0 .1rem 0;
`;

export const SubTitle = styled.h3`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 5rem;
  font-weight: 800;
  padding: 1rem;
  margin: 3rem 0 .1rem 0;
  
`;

export const SmallSubTitle = styled.h4`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 2.25rem;
  font-weight: 400;
  padding: 1rem;
  margin: 3rem 0 .1rem 0;
  
`;

export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
`;

// SKILLS SECTION


export const SkillsItem = styled.li`
  margin: .5rem;
  display: inline-block;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-family: ${fonts.body};
  border: 1px solid rgb(113, 119, 98);
  border-radius: .7rem;
  transition: all 1s ease;
  color: ${randomColor};

  &:hover {
    cursor: pointer;
    color: black;
    border-color: black;
    font-weight: 600;
    background-color: #f9ffea;
    transition: all .2s ease;
    text-shadow: 2px 2px 0 ${colors.primary};
    box-shadow: 2px 2px 0px 0px ${colors.primary};
  }
`;