import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/port7.jpg";
import IMG2 from "../../assets/portfolio1.jpg";
import IMG3 from "../../assets/portfolio5.png";
import IMG4 from "../../assets/portfolio2.jpg";
import IMG5 from "../../assets/portfolio3.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Mollick Photography</h3>
          <div className="portfolio__item__cta">
            <a href="" className="btn">
              Github
            </a>
            <a
              href="https://mollick-photography.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" />
          </div>
          <h3>King Inventory</h3>
          <div className="portfolio__item__cta">
            <a href="" className="btn">
              Github
            </a>
            <a
              href="https://king-inventory.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Baiku Manufacture</h3>
          <div className="portfolio__item__cta">
            <a href="" className="btn">
              Github
            </a>
            <a
              href="https://baiku-manufacture.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
