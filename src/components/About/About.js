import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"></div>
        <div className="about-content"></div>
      </div>
    </section>
  );
};

export default About;
