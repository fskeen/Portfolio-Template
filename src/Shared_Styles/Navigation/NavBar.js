import React from "react";
import { Link } from "react-router-dom";
import colors from "../Style_Variables/colors";

const NavBar = () => {
  const links = ["Home", "About", "Skills", "Work", "Contact"];

  return (
    <nav class="navBar">
      <ul>
        {links.map(link => {
          return (
            <li className="link" key={link}>
              <Link to={`/${link !== "Home" ? link.toLowerCase() : ""}`}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>icons</div>
    </nav>
  );
};

export default NavBar;
