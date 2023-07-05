import React, { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

function Notification() {
  const { showNotification, type, message } = useContext(NotificationContext);

  const onHoverHandler = () => {};

  return (
    <div
      className={`notification ${showNotification ? 'active' : ''}`}
      onMouseEnter={onHoverHandler}>
      <div className={`header ${type}`}>
        <h3 className="type">{type}</h3>
        <button className="closeBtn">&#10006;</button>
      </div>
      <div className="mainInfo">{message}</div>
      <div className="timeline"></div>
    </div>
  );
}

export default Notification;
