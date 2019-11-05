import styled from 'styled-components'
import { colors, randomColor, fonts, device } from '../../Shared_Styles/Style_Variables/colors'


/////////////
export const StyledSVGTitle = styled.div`
  path {
    @keyframes draw {
      0% { 
          stroke-dashoffset: 1000; 
          fill: rgba(0,0,0,0); 
      }
      100% {  
         stroke-dashoffset: 800; 
         fill: #c3f73a;
      }
   }
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation-name: draw;
    animation-duration: 5s;
    animation-fill-mode: reverse;
  }
  margin-left: 1rem;
`;

/////////////


export const MainContainer = styled.main`
  width: 100%;
  height: 95vh;
  padding: 7rem 0 0 7rem;
  overflow-y: scroll;
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

export const PageTitle = styled.h2`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 6rem;
  font-weight: 800;
  padding: 1rem 1rem 0 1rem;
  margin: 3rem 1rem .1rem 1rem;
`;

export const SubTitle = styled.h3`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size:7rem;
  font-weight: 800;
  padding: 1rem 1rem 0 1rem;
  margin: 3rem 1rem 0 1rem;
  
`;

export const SmallSubTitle = styled.h4`
  color: ${colors.primary};
  font-family: ${fonts.title};
  font-size: 2.25rem;
  font-weight: 400;
  padding: 1rem;
  margin: 3rem 1rem .1rem 1rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 1.6rem;
  line-height: 2.75rem;
  padding: 1rem;
  margin: 01rem;
  @media ${device.mobileL} {
    font-size: 1.75rem;
  }
`;

// SKILLS SECTION
export const SkillsList = styled.ul`
  padding: 1rem;
  padding: 1rem;
  display: flex;
  text-align: center;
  align-items: flex-end;
  flex-flow: row wrap;
`;

export const SkillsItem = styled.li`
  margin: .5rem;
  display: inline-block;
  padding: 2rem;
  font-size: 1.8rem;
  font-family: ${fonts.body};
  border: 1px solid rgb(113, 119, 98);
  border-radius: .7rem;
  transition: all 1s ease;
  color: ${randomColor};

  &:hover {
    cursor: pointer;
    color: black;
    border-color: black;
    background-color: #f9ffea;
    transition: all .2s ease;
    text-shadow: 2px 2px 0 ${colors.primary};
    box-shadow: 2px 2px 0px 0px ${colors.primary};
  }

  @media ${device.mobileS} {
    max-width: 60rem;
  }
`;