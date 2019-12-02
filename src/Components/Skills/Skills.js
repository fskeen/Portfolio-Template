import React from "react";
import { MainContainer } from "./Skills.styled";
import {
  SubTitle,
  Paragraph
} from "../../Shared_Styles/TextStyles";

const Skills = () => {
  return (
    <MainContainer>
      <SubTitle>Skills & Experience</SubTitle>
      <Paragraph>
        Quisque nulla justo, gravida scelerisque lobortis in, tincidunt ac orci.
        Integer placerat sem eu tortor imperdiet, sit amet auctor dolor
        interdum. Etiam quis lacus condimentum, placerat nisi a, volutpat purus.
        Nulla laoreet nunc at augue molestie congue. Aliquam blandit nisl eu
        metus commodo, a sodales augue cursus.
      </Paragraph>{" "}
    </MainContainer>
  );
};

export default Skills;
