import React from 'react';

interface ThemeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeContext = React.createContext<ThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
});

export default ThemeContext;
