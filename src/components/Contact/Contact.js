import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import './Contact.scss';

function Contact() {
  const [state, handleSubmit] = useForm('xkneopej');
  if (state.succeeded) {
    return <p className="success-msg">Thanks for your message. I&apos;m unavailable right now, but will respond as soon as possible! 😜</p>;
  }

  return (
    <section id="Contact">
      <h1 className="contact-haed">Let&apos;s talk</h1>
      <div className="container-contact">
        <div className="text-form">
          <p className="contact-text">
            I&apos;m open to job opportunities and side projects,
            so if you&apos;d like to chat please get in touch.

          </p>
          <form className="form" onSubmit={handleSubmit}>
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button className="form-btn" type="submit" disabled={state.submitting}>Get in touch</button>
          </form>
        </div>
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
