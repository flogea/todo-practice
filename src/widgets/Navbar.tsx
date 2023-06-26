import React from 'react';

import LangButton from './LangButton';
import DarkModeToggler from './DarkModeToggler';

import '../index.scss';

function Navbar() {
  return (
    <div className="navbar">
      <h1>To Do</h1>
      <LangButton />
      <DarkModeToggler />
    </div>
  );
}

export default Navbar;
