import React from 'react';

import ThemeContext from '../context/ThemeContext';

function DarkModeToggler() {
  const { darkMode, setDarkMode } = React.useContext(ThemeContext);
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
