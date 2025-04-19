/* eslint-disable max-len */
import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import pic from '../../assets/_C7A2016.jpg';
import CV from '../../assets/CV.pdf';
import './home.scss';

function Home() {
  return (
    <section id="Home">
      <h3 className="homehead">
        Hello, I
        <span className="span">&apos;</span>
        m Francis Verissimo
        <span className="span">.</span>
        {' '}
      </h3>

      <div className="card-container">
        <div className="card">
          <img src={pic} className="pic" alt="pic" />
          <h4 className="pro">Front-end Developer</h4>
          <hr />
          <p className="summary">Dynamic Front-End Developer with a passion for building responsive, user-friendly web and mobile applications. Adept at collaborating in remote, cross-functional teams and delivering high-quality code in fast-paced environments. Results-driven and committed to solving real-world problems through clean, scalable, and maintainable code. Known for a strong work ethic, attention to detail, and a constant drive to learn and improve.</p>
          <div className="btn-contain">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#Contact" className="btn">Let&apos;s talk</a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/francis-o-verissimo/" alt="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/VTY1999" alt="GitHub"><FaGithub /></a>
            <a href="https://angel.co/u/verissimo-francis" alt="Angellist"><FaAngellist /></a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Home;
