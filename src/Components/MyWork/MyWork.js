import React, { useState, useEffect } from "react";
import DisplayCard from "./Display/DisplayCard";
import MyWorkTitle from '../../Shared_Styles/SVGs/MyWorkTitle'
import {StyledSVGTitle} from '../About/About.styled'
// import { Modal } from "styled-react-modal";
import {
  MainContainer,
  DisplayContainer,
  FilterButton,
  // FilterButtonWrapper,
  FilterButtonMenu,
  Para
} from "./MyWork.styled";
// import {
//   SubTitle,
//   Paragraph,
//   SmallSubTitle
// } from "../../Shared_Styles/TextStyles";
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
    <MainContainer id="work">
      <StyledSVGTitle>
        <MyWorkTitle />
      </StyledSVGTitle>
      <Para >
        Cupcake ipsum dolor sit amet. Apple pie chocolate cake croissant cupcake gummi bears cupcake. Pudding cheesecake toffee tootsie roll cupcake. Macaroon lemon drops pie icing macaroon. Danish jujubes jujubes pudding chocolate. Jelly beans chocolate bar muffin soufflé candy canes cookie. Carrot cake candy gingerbread dessert wafer oat cake sesame snaps pastry.
      </Para>
      <DisplayContainer>
      <FilterButtonMenu>
          {skillList.map((skill, i) => (
            <FilterButton
              className={`filter ${skill === selectedSkill && "active"}`}
              data-filter={skill}
              onClick={() => setSelectedSkill(skill)}
              key={i}
            >
              {skill}
            </FilterButton>
          ))}
      </FilterButtonMenu>
        {projectList.map((project, i) => {
          return <DisplayCard key={i} project={project} />;
        })}
      </DisplayContainer>
    </MainContainer>
  );
};

export default MyWork;
