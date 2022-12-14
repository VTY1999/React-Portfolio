/* eslint-disable max-len */
import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import pic from '../../assets/IMG-20220309-WA0001.jpg';
import CV from '../../assets/CV.pdf';
import './home.scss';

function Home() {
  return (
    <section className="Home">
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
          <p className="summary">I&apos;ve gained the experience of working remotely and collaboratively in a remote environment, which made me have the opportunity to code every week with different developers from all over the world. I have worked on several projects from landing pages to desktop and mobile versions of a web application allowing me to learn and improve my technical and professional skills. I am the type of person that starts something new and sees it through to the end. I, Bring the same kind of energy to all of my work, including my growth as a Front-end Developer.</p>
          <div className="btn-contain">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="/Contact" className="btn">Let&apos;s talk</a>
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
