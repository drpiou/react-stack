import React from 'react';
import './Notifications.css';
import { StackComponentProps } from '../../lib';
import { Notification } from '../contexts/notifications';

const Notifications = (props: StackComponentProps<Notification>): JSX.Element => {
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
