import React from 'react';
import { BsGithub, BsEyeFill } from 'react-icons/bs';
import Image1 from '../../assets/Screenshot (26).png';
import Image2 from '../../assets/Screenshot (192).png';
import Image3 from '../../assets/Screenshot (128).png';
import Image4 from '../../assets/Screenshot (196).png';
import './Portfolio.scss';

function Portfolio() {
  const Projects = [
    {
      id: 1,
      title: 'CONFERENCE PAGE',
      img: Image1,
      description: 'This is a conference page about an art summit displaying the main program, speakers and the about section which displays past events.',
      stack: 'Html | CSS | JavaScript',
      demo: 'https://vty1999.github.io/Conference-page/',
      github: 'https://github.com/VTY1999/Conference-page',
    },
    {
      id: 2,
      title: 'AIR POLLUTION',
      img: Image2,
      description: 'This webapp tracks air pollution in more than 20 countries drawing data from an API',
      stack: 'React | Redux | SCSS',
      demo: 'https://verissimofrancis-air-pollution.netlify.app/',
      github: 'https://github.com/VTY1999/React-Capstone',
    },
    {
      id: 3,
      title: 'MATH MAGICIANS',
      img: Image3,
      description: 'Math magicians is a website for all mathematics fans. It is a Single Page App (SPA) that allows users to make calculations and read a random math-related quote.',
      stack: 'React | CSS',
      demo: 'https://francis-math-magicians.netlify.app/',
      github: 'https://github.com/VTY1999/Math-Magicians',
    },
    {
      id: 4,
      title: 'Rent A Car',
      img: Image4,
      description: 'This is a car rental website that allows you to view a variety of cars and book them at different rates. User can see all models and model details and rerve car. Admin can add and delete car.',
      stack: 'React | CSS | SCSS | Ruby on Rails',
      demo: 'https://rent-car-service.netlify.app/',
      github: 'https://github.com/Gegardus/book-a-car-frontend',
    },
  ];

  return (
    <section id="Portfolio">
      <h2 className="Portfolio-title">Portfolio</h2>
      <hr className="h" />
      <p className="recent">My Recent Works</p>
      <div className="container">
        {Projects.map((Pro) => (
          <article className="portfolio__item" key={Pro.id}>
            <div className="portfolio-image">
              <img src={Pro.img} className="img" alt="img" />
            </div>
            <div className="portfolio-content">
              <h3 className="title">{Pro.title}</h3>
              <p className="decrib">{Pro.description}</p>
              <p className="stack">
                Stack:
                {' '}
                {Pro.stack}
              </p>
            </div>
            <div className="View">
              <a
                href={Pro.demo}
                className="btn1"
              >
                <BsEyeFill />
                <p className="btn-text">Live Demo</p>
              </a>
              <a
                href={Pro.github}
                className="btn1"
              >
                <BsGithub />
                <p className="btn-text">GitHub</p>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
