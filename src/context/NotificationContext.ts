import React, { SetStateAction } from 'react';

interface NotificationContext {
  showNotification: boolean;
  setShowNotification: (value: boolean) => void;
  type: 'success' | 'warning' | 'danger' | string;
  message: string;
}

const NotificationContext = React.createContext<NotificationContext>({
  showNotification: false,
  setShowNotification: (value: boolean) => {},
  type: 'success',
  message: '',
});

export default NotificationContext;
