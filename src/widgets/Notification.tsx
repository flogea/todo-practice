import React, { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

function Notification() {
  const { showNotification, type, message } = useContext(NotificationContext);

  return showNotification && <div>{message}</div>;
}

export default Notification;
