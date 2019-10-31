import React from "react";

const About = () => {
  return (
    <div className="Wrapper">
      <div>
        <h1>About Me</h1>
        <p className="pExample">
          Quisque nulla justo, gravida scelerisque lobortis in, tincidunt ac
          orci. Integer placerat sem eu tortor imperdiet, sit amet auctor dolor
          interdum. Etiam quis lacus condimentum, placerat nisi a, volutpat
          purus. Nulla laoreet nunc at augue molestie congue. Aliquam blandit
          nisl eu metus commodo, a sodales augue cursus.
        </p>{" "}
        <p className="pExample">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          massa eget tortor gravida pharetra sed vitae metus. Donec euismod
          eleifend ex quis faucibus. Fusce sed leo et lacus bibendum hendrerit a
          vel est. Ut finibus mi vitae ex auctor, nec fermentum nibh
          scelerisque. Duis commodo viverra eros sit amet efficitur. Integer
          finibus enim id massa volutpat accumsan. Phasellus tristique vehicula
          lorem, vel auctor nisl malesuada non. mauris.
        </p>
      </div>
      <div className="futureStuff"></div>
    </div>
  );
};

export default About;
