import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skills.scss';

function Skills() {
  return (
    <section id="Skills">
      <h2 className="Skills__title">Skills</h2>
      <div className="skills__container">
        <div className="skills__frontend">
          <h3 className="skills__head">Front-end Development</h3>
          <div className="skills__content">
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>React</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3 className="skills__head">Back-end Development</h3>
          <div className="skills__content">
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Ruby</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Ruby on Rails</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Swagger</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>RSpec</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Restful API</h4>
            </article>
          </div>
        </div>
        <div className="skills__professional">
          <h3 className="skills__head">Professional</h3>
          <div className="skills__content">
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Pair-Programming</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Teamwork</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Mentoring</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Communication</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Adaptability</h4>
            </article>
            <article className="skills-items">
              <BsFillPatchCheckFill className="skills-items-icon" />
              <h4>Problem-solving</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
