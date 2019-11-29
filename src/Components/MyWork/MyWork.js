import React, { useState, useEffect } from "react";
import DisplayCard from "./Display/DisplayCard";

import { Modal } from "styled-react-modal";
import {
  MainContainer,
  DisplayContainer,
  FilterButton,
  FilterButtonWrapper,
  FilterButtonMenu
} from "./MyWork.styled";
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
    } else {
      setProjectList(filtered);
    }
  }, [selectedSkill]);

  return (
    <MainContainer>
      <FilterButtonMenu>
        <FilterButtonWrapper>
          {skillList.map((skill, i) => (
            <FilterButton
              className="filter"
              data-filter={skill}
              onClick={() => setSelectedSkill(skill)}
              key={i}
            >
              {skill}
            </FilterButton>
          ))}
        </FilterButtonWrapper>
      </FilterButtonMenu>
      <DisplayContainer>
        {projectList.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
