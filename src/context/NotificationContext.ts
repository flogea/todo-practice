import React, { SetStateAction } from 'react';

interface NotificationContext {
  showNotification: boolean;
  NotificationHandler: (type: string, message: string) => void;
  type: 'success' | 'warning' | 'danger' | string;
  message: string;
}

const NotificationContext = React.createContext<NotificationContext>({
  showNotification: false,
  NotificationHandler: (type: string, message: string) => {},
  type: 'success',
  message: '',
});

export default NotificationContext;
