import React from 'react';

import DarkModeToggler from './DarkModeToggler';
import LangButton from './LangButton';
// import { Context } from '../Context';

import '../index.scss';

function Navbar() {
  // const { darkMode } = React.useContext(Context);

  return (
    <div className="navbar">
      <h1>To Do</h1>
      <LangButton />
      <DarkModeToggler />
    </div>
  );
}

export default Navbar;
