import React from 'react';

import { DarkModeToggler, LangButton } from './';

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
