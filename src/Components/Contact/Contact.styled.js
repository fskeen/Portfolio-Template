import styled, { keyframes } from 'styled-components'
import { Field, Form } from 'formik'
import { colors, fonts, randomColor, device } from '../../Shared_Styles/Style_Variables/colors'
import { Paragraph } from '../../Shared_Styles/TextStyles';

export const Input = styled(Field)`
  background-color: ${colors.text};
  border: none;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: .5rem;
  margin-bottom: 2rem;
`;

export const ParaInput = styled(Input)`
  height: 20rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  margin: 5rem 5rem 0 5rem;
  width: 50rem;
`;

export const Label = styled.label`
  color: ${colors.text};
  font-family: ${fonts.body};
  font-size: 2rem;
  line-height: 2.75rem;
  margin: 1rem 0;
`;

const gradient = keyframes`
    0% {
        background-position: 14% 0%;
    }
    50% {
        background-position: 87% 100%;
    }
    100% {
        background-position: 14% 0%;
    }
`

export const Button = styled.button`
    margin: .5rem;
    width: 18rem;
    display: inline-block;
    padding: 1rem;
    font-size: 2.2rem;
    font-family: ${fonts.body};
    border: 2px solid rgb(113, 119, 98);
    background: none;
    border-radius: .7rem;
    transition: all 1s ease;
    color: ${randomColor};
    align-self: flex-end;

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

// export const Button = styled.button`
//     width: 20rem;
//     border: 3px solid ${colors.primary};
//     border-radius: .5rem;
//     padding: 1.5rem;
//     margin-top: 2rem;
//     background-color: blue;
//     background: linear-gradient(120deg, #6559ae, #ff7159, #6559ae);
//     color: ${colors.primary};
//     font-size: 1.8rem;
//     font-family: ${fonts.title};
//     align-self: flex-end;
//     cursor: pointer;
//     animation: gradient 3s ease-in-out infinite;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;

//     @keyframes gradient {
//         0% {
//         background-position: 14% 0%;
//         }
//         50% {
//         background-position: 87% 100%;
//         }
//         100% {
//         background-position: 14% 0%;
//         }
//     }
// `;

export const Error = styled(Paragraph)`
  font-size: 1.4rem;
  color: ${colors.primary};
  margin: -2rem;
  text-align: right;
`;




