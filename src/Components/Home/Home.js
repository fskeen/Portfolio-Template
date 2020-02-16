import React from "react";
import { Link } from "react-router-dom";

import { MainContainer, Button } from "./Home.styled";
import {
  SubTitle,
  Paragraph
} from "../../Shared_Styles/TextStyles";

const Home = () => {
  return (
    <MainContainer>
      <SubTitle>Faye Skeen</SubTitle>
      <Paragraph>
        Web developer, technical trainer, illustrator, tabletop afficionado.
      </Paragraph>
      <Paragraph>
        Thinking about a new site? Need your old code refactored for a redesign? Heck, just got a great dad joke to share? Check out <Link to="work">my work</Link>, look through <Link to="/about">my skills</Link>, and <Link to="/contact">
      drop me a message</Link>.
      </Paragraph>
    </MainContainer>
  );
};

export default Home;
