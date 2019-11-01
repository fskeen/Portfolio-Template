import styled from 'styled-components'
import { colors, randomColor, fonts } from '../../Shared_Styles/Style_Variables/colors'


// SKILLS SECTION

export const SkillsItem = styled.li`
  margin: .5rem;
  display: inline-block;
  padding:1.5rem;
  font-size: 1.4rem;
  font-family: ${fonts.body};
  border: 2px solid ${randomColor};
  border-radius: .7rem;
  transition: all 2s ease;
  color: ${randomColor}}

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