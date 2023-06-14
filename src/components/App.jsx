import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './Navbar.jsx';
import { Context } from '../Context.js';

import '../index.scss';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Context.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? 'container dark' : 'container'}>
          <Navbar />
          <div>
            <p>{t('greeting')}</p>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
