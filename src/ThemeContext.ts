import React from 'react';
// export const Context = React.createContext(null);

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export default ThemeContext;
