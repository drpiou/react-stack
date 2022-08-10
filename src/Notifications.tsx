import React from 'react';
import './Notifications.css';
import { NotificationsComponentProps } from './contexts/notifications';

const Notifications = (props: NotificationsComponentProps): JSX.Element => {
  const { stack } = props;

  return (
    <div className={'notifications'}>
      {stack.map((notification) => (
        <div key={notification.id}>{notification.text}</div>
      ))}
    </div>
  );
};

export default Notifications;
