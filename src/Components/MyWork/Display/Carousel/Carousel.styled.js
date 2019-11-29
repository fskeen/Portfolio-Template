import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';
import {
    colors,
    randomColor,
    fonts,
    device
  } from "../../../../Shared_Styles/Style_Variables/colors";

export const StyledCarousel = styled(Carousel)`
    border-radius: .2rem .2rem 0 0;
    position: relative;
    button.control-arrow {
        position: absolute;
        height: 5rem;
        padding: 3rem 3rem 6rem 3rem !important;
        margin-top: 25% !important;
        border-radius: 3rem 0 0 3rem;
        opacity: 1 !important;
        &:hover {
            border: none;
            }
        &:before {
            top: -10px;
            border-top: #fff 8px solid;
        }
    }

    button.control-prev {
        border-radius: 0 3rem 3rem 0;
        &:hover {
            border: none;
            &:before {
            border-right: 8px solid ${colors.primary} !important;
            }
        }

    }
    button.control-next:hover {
        border: none;
        &:before {
        border-left: 8px solid ${colors.primary} !important;
        }
    }
`;