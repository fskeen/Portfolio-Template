import React from "react";
import DisplayCard from "./Display/DisplayCard";

import { MainContainer, DisplayContainer } from "./MyWork.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";
import { projects } from "./projects";

const MyWork = () => {
  return (
    <MainContainer>
      <DisplayContainer>
        {projects.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
