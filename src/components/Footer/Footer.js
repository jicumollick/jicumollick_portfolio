import React from "react";
import "./Footer.css";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jicu
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/WebBlood" target={"_blank"}>
          {" "}
          <FiFacebook></FiFacebook>
        </a>
        <a
          href="https://www.linkedin.com/in/jicu-mollick-12a7091a0/"
          target={"_blank"}
        >
          {" "}
          <AiOutlineLinkedin></AiOutlineLinkedin>{" "}
        </a>
        <a href="https://github.com/jicumollick" target={"_blank"}>
          {" "}
          <AiOutlineGithub></AiOutlineGithub>
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Jicu Mollick , All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
