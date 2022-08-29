import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section className="Contact">
      <h1 className="contact-haed">Let&apos;s talk</h1>
      <div className="container-contact">
        <form className="form" action="https://formspree.io/f/mayvyyqk" method="POST">
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
      </div>
    </section>
  );
}

export default Contact;
