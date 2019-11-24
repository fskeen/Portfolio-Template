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
  const skillFilters = ["All", "Javascript", "React.js", "Node.js"];
  return (
    <MainContainer>
      <DisplayContainer>
        {/* {skillFilters.map(skill => (
          <button>{skill}</button>
        ))} */}
        {projects.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
