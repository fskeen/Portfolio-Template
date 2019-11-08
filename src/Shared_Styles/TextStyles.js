import {colors, fonts, device} from './Style_Variables/colors';
import styled from 'styled-components';

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
  margin: 1rem;

  @media ${device.mobileL} {
    font-size: 1.75rem;
  }
`;
