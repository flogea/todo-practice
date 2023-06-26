import React from 'react';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export default ThemeContext;
