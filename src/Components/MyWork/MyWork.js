import React, { useState, useEffect } from "react";
import DisplayCard from "./Display/DisplayCard";

import { Modal } from "styled-react-modal";
import { MainContainer, DisplayContainer } from "./MyWork.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";
import { projects } from "./projects";

const MyWork = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedSkill, setSelectedSkill] = useState("All");

  const skillList = ["All", "JavaScript", "React.js", "Node.js"];

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.primarySkills.includes(selectedSkill)
    );
    if (selectedSkill === "All") {
      setProjectList(projects);
      console.log(projectList);
    } else {
      setProjectList(filtered);
      console.log(filtered);
    }
  }, [selectedSkill]);

  return (
    <MainContainer>
      <div>
        {skillList.map((skill, i) => (
          <button onClick={() => setSelectedSkill(skill)} key={i}>
            {skill}
          </button>
        ))}
      </div>
      <DisplayContainer>
        {projectList.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
