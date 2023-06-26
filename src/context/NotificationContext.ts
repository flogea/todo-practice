import React, { SetStateAction } from 'react';

interface NotificationContextType {
  NotificationHandler: Object;
  showNotification: boolean;
  type: string;
  message: string;
  setShowNotification?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationContext = React.createContext<NotificationContextType>({
  NotificationHandler: {},
  showNotification: false,
  type: '',
  message: '',
  setShowNotification: () => {},
});

export default NotificationContext;
