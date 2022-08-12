import { log } from '@drpiou/ts-utils';
import React from 'react';
import './App.css';
import { NotificationProvider, NotificationRef, useNotification } from './contexts/notifications';
import { ToastProvider, ToastRef, useToast } from './contexts/toasts';
import Notifications from './components/Notifications';
import Toasts from './components/Toasts';

const App = (): JSX.Element => {
  const handleNotificationsRef = (ref: NotificationRef): void => {
    log('NotificationProvider@onRef: ', ref);
  };

  const handleToastsRef = (ref: ToastRef): void => {
    log('ToastProvider@onRef: ', ref);
  };

  return (
    <NotificationProvider Component={Notifications} onRef={handleNotificationsRef}>
      <ToastProvider Component={Toasts} onRef={handleToastsRef}>
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
