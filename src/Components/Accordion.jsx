import '../CSS/App.css';
import '../CSS/Accordion.css';
import { useState } from 'react';

function Accordian({ title, content, isDark }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <div id="accordion" className={` ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="title" onClick={handleIsClicked}>
        <h4>{title}</h4>
        {isClicked && <i className="bi bi-chevron-down" />}
        {!isClicked && <i className="bi bi-chevron-up" />}
      </div>
      {isClicked && <div className="accordion_item">{content}</div>}
    </div>
  );
}

export default Accordian;
