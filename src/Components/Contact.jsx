import React, { useState } from 'react';
import '../index.css';
import '../CSS/Contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/your-form-endpoint', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Thank you for your message!');
      form.reset();
    } else {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <form id="contact_form" onSubmit={handleSubmit} className="container">
          <div id="form_section_1">
            <div>
              <label for="name_input"> Name:</label>
              <input id="name_input" type="text" name="name" required />
            </div>
            <div>
              <label for="email_input"> Email:</label>
              <input id="email_input" type="email" name="email" required />
            </div>
          </div>
          <div id="form_section_2">
            <div>
              <label for="message_input"> Message:</label>
              <textarea id="message_input" name="message" required />
            </div>

            <button
              id="contact_submit"
              type="submit"
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;

/*import '../CSS/App.css';
import '../CSS/Contact.css';

function Contact({ isDark }) {
  return (
    <div
      id="form_container"
      className={`${isDark ? 'section dark-theme' : 'section light-theme'}`}
    >
      <h4>Contact</h4>
      <form
        action="https://formspree.io/f/xvgpezad"
        method="POST"
        id="contact_form"
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <textarea
          id="message"
          type="text"
          placeholder="Enter your message"
          name="message"
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default Contact;
*/
