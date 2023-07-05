import React from 'react';

interface ThemeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeContext = React.createContext<ThemeContext>({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
});

export default ThemeContext;
