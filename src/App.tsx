import React from 'react';
import './App.css';
import { NotificationProvider, useNotification } from './contexts/notifications';
import { ToastProvider, useToast } from './contexts/toasts';

const App = (): JSX.Element => {
  return (
    <NotificationProvider onRef={console.log}>
      <ToastProvider onRef={console.log}>
        <ThingNotification />
        <ThingToast />
      </ToastProvider>
    </NotificationProvider>
  );
};

const ThingNotification = (): JSX.Element => {
  const notifications = useNotification();

  const handleClick = (): void => {
    notifications.show({ text: 'hello' });
  };

  return (
    <div className={'card'}>
      <button onClick={handleClick}>notification</button>
    </div>
  );
};

const ThingToast = (): JSX.Element => {
  const toasts = useToast();

  const handleClick = (): void => {
    toasts.show({ text: 'hello' });
  };

  return (
    <div className={'card'}>
      <button onClick={handleClick}>toast</button>
    </div>
  );
};

export default App;
