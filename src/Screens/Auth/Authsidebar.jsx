import React from "react";
import { Link } from "react-router-dom";

// style
import "./style.css";

const Authsidebar = ({ headline, btnName, path }) => {
  return (
    <>
      <div id="shape1"></div>
      <div id="shape2"></div>
      <div id="shape3"></div>
      <div id="shape4"></div>
      <div className="logo">
        Logo
      </div>
      <div id="auth__sidebar__inner">
        <h2 className="medium__text"><strong>{headline}</strong></h2>
        <h6 className="small__text">To keep track of your earnings keep connected.</h6>
        <Link to={path}>
          <button>{btnName}</button>
        </Link>
      </div>
    </>
  );
};

export default Authsidebar;