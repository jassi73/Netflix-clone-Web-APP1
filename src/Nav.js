import React, { useState, useEffect } from "react";
import Logo from "./netflix.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={` nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={Logo} alt="Netflix Logo" />
      <a
        className="linkdin"
        href="https://www.linkedin.com/in/jasa-ram-6a075a139/"
        target="blank"
      >
        Linkedin
      </a>
    </div>
  );
}

export default Nav;
