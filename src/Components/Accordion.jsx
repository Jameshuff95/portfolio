import '../CSS/App.css';
import '../CSS/Accordion.css';
import { useState } from 'react';

function Accordian({ title, content, isDark }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <div id="accordion">
      <div
        onClick={handleIsClicked}
        className={` ${isDark ? 'title dark-theme' : 'title light-theme'}`}
      >
        <h4>{title}</h4>
        {isClicked && <i className="bi bi-chevron-down" />}
        {!isClicked && <i className="bi bi-chevron-up" />}
      </div>
      {isClicked && <div className="accordion_item">{content}</div>}
    </div>
  );
}

export default Accordian;
