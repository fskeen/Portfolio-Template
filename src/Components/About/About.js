import React from "react";
import {SkillsItem} from './About.styled'

const About = () => {
  const skills = ["JavaScript", "React", "HTML", "CSS", "LESS", "React Router", "Node JS", "Express", "Redux", "Material UI", "styled-components", "SQL", "REST", "Git", "JSON", "Context API"]
  return (
    <main>
      <h2>About</h2>
      <p>
        Cupcake ipsum dolor sit amet wafer gingerbread tart. Chupa chups caramels fruitcake. Bonbon cookie croissant gingerbread macaroon sugar plum soufflé. Marshmallow lollipop cupcake toffee.
      </p>
      <p>
        Sweet sesame snaps liquorice wafer. Lollipop halvah chocolate cake cheesecake. Bonbon dragée chocolate sweet chocolate tootsie roll.
      </p>
      <p>
        Croissant cookie danish powder caramels sweet cookie chocolate bar dragée. Cake icing cotton candy halvah cake gummies candy canes. Chocolate bonbon cookie cookie dragée marzipan halvah tootsie roll. Gingerbread carrot cake sugar plum chocolate bar danish lollipop.
      </p>
      <section>
        <h3>Skills</h3>
        <ul>
          {skills.map(skill => {
            return (
              <SkillsItem key={skill}>{skill}</SkillsItem>
            )
          })}
        </ul>
      </section>
    </main>
  );
};

export default About;
