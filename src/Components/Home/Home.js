import React from "react";
import { Link } from "react-router-dom";

import { MainContainer, Button } from "./Home.styled";
import {
  SubTitle,
  Paragraph,
  SmallSubTitle
} from "../../Shared_Styles/TextStyles";

const Home = () => {
  return (
    <MainContainer>
      <SubTitle>Home Page</SubTitle>
      <Paragraph>
        Quisque nulla justo, gravida scelerisque lobortis in, tincidunt ac orci.
        Integer placerat sem eu tortor imperdiet, sit amet auctor dolor
        interdum. Etiam quis lacus condimentum, placerat nisi a, volutpat purus.
        Nulla laoreet nunc at augue molestie congue. Aliquam blandit nisl eu
        metus commodo, a sodales augue cursus.
      </Paragraph>{" "}
      <Link to="/contact">
        <Button>CONTACT ME</Button>
      </Link>
    </MainContainer>
  );
};

export default Home;
