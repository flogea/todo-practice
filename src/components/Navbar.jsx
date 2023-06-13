import React from 'react';

import DarkModeToggler from './DarkModeToggler.jsx';
// import { Context } from '../Context';

import '../index.scss';

function Navbar() {
  // const { darkMode } = React.useContext(Context);

  return (
    <div className="navbar">
      <h1>To Do</h1>
      <DarkModeToggler />
    </div>
  );
}

export default Navbar;
