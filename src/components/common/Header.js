import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeCss = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeCss} exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/courses" activeStyle={activeCss}>
        Courses
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" activeStyle={activeCss}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
