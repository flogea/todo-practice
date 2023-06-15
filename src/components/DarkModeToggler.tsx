import React from 'react';

import { Context } from '../Context';

function DarkModeToggler() {
  const { darkMode, setDarkMode } = React.useContext(Context);
  React.useEffect(() => {
    setDarkMode(Boolean(JSON.parse(localStorage.getItem('darkMode') || '{}')));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="toggler">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeToggler;
