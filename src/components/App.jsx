import React from 'react';
import Navbar from './Navbar.jsx';
import { Context } from '../Context.js';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <>
      <Context.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? 'container dark' : 'container'}>
          <Navbar />
          <div>Hi there</div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
