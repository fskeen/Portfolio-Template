import styled from "styled-components";
import {
  colors,
  fonts,
  device
} from "../../Shared_Styles/Style_Variables/colors";

export const MainContainer = styled.main`
  width: 100%;
  height: 90vh;
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
