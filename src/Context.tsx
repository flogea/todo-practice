import React, { ReactNode, SetStateAction } from 'react';

import ThemeContext from './context/ThemeContext';
import NotificationContext from './context/NotificationContext';

interface Props {
  children?: ReactNode;
}

const Context = ({ children }: Props) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const [showNotification, setShowNotification] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(time);
  }, [showNotification]);

  const NotificationHandler = (type: string, message: string) => {
    setType(type);
    setMessage(message);
    setShowNotification(true);
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <NotificationContext.Provider
          value={{
            showNotification,
            NotificationHandler,
            type,
            message,
          }}>
          {children}
        </NotificationContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default Context;
