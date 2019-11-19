import React from "react";
import DisplayCard from "./Display/DisplayCard";

import { MainContainer, DisplayContainer } from "./MyWork.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";

const MyWork = () => {
  const Projects = [
    {
      title: "Droom",
      image: "https://i.imgur.com/jv5FtmK.png",
      skills: ["html", "css"],
      deployedUrl: "https://lambda-bw-droom.github.io/droom-landing/",
      githubUrl: "https://github.com/lambda-bw-droom/droom-landing"
    },
    {
      title: "Example",
      image: "https://i.imgur.com/jv5FtmK.png",
      skills: ["html", "css"],
      deployedUrl: "https://lambda-bw-droom.github.io/droom-landing/",
      githubUrl: "https://github.com/lambda-bw-droom/droom-landing"
    }
  ];
  return (
    <MainContainer>
      <DisplayContainer>
        {Projects.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
