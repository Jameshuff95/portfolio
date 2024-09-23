import '../CSS/App.css';
import '../CSS/Contact.css';

function Contact({ isDark }) {
  return (
    <div
      id="form_container"
      className={`${isDark ? 'dark-theme' : 'light-theme'}`}
    >
      <h2>Contact</h2>
      <form action="POST" id="contact_form">
        <input id="name" type="text" placeholder="Enter your name" />
        <input id="email" type="email" placeholder="Enter your email" />
        <textarea id="message" type="text" placeholder="Enter your message" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
