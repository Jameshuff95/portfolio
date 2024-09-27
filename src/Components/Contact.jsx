import '../CSS/App.css';
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
