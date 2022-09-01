import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import './Contact.scss';

function Contact() {
  return (
    <section className="Contact">
      <h1 className="contact-haed">Let&apos;s talk</h1>
      <div className="container-contact">
        <form className="form" action="https://formspree.io/f/mayvyyqk" method="POST">
          <div className="input-row">
            <input
              type="text"
              name="name"
              className="fullName"
              placeholder="Full Name"
              maxLength="50"
              required
            />
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Email"
              maxLength="50"
              required
            />
          </div>
          <input
            type="text"
            name="Subject"
            className="subject"
            placeholder="Subject"
            maxLength="50"
            required
          />
          <textarea
            placeholder="Message..."
            className="message"
            name="message"
            required
          />
          <button type="submit" className="send">Get in touch</button>
        </form>
        <div className="form-social">
          <a href="https://www.linkedin.com/in/francis-o-verissimo/" alt="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/VTY1999" alt="GitHub"><FaGithub /></a>
          <a href="https://angel.co/u/verissimo-francis" alt="Angellist"><FaAngellist /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
