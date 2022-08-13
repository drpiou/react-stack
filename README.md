# `@drpiou/react-stack`

![Licence](https://img.shields.io/github/license/drpiou/react-stack)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/react-stack)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/react-stack` package creates a React stack context (usually used to create notifications and toasts).

> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/react-stack
```

## Example

### `contexts/notifications.ts`

```typescript
import {
  createStackContext,
  StackItem,
  StackOptions,
  StackRef,
} from '@drpiou/react-stack';

export type NotificationType =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type NotificationOnClose = () => void;

export type NotificationOptions = StackOptions<{
  text: string;
  type?: NotificationType;
  onClose?: NotificationOnClose;
}>;

export type Notification = StackItem<NotificationOptions>;

export type NotificationRef = StackRef<NotificationOptions>;

export const [useNotification, NotificationProvider] =
  createStackContext<NotificationOptions>({
    defaultDuration: 3000,
  });
```

### `App.tsx`

```typescript jsx
import MyComponent from './components/MyComponent';
import Notifications from './components/Notifications';
import { NotificationProvider } from './contexts/notifications';

const App = (): JSX.Element => {
  return (
    <NotificationProvider Component={Notifications} onRef={console.log}>
      <MyComponent />
    </NotificationProvider>
  );
};

export default App;
```

### `components/Notifications/index.tsx`

```typescript jsx
import React from 'react';
import { StackComponentProps } from '@drpiou/react-stack';
import { Notification } from '../contexts/notifications';

const Notifications = (
  props: StackComponentProps<Notification>,
): JSX.Element => {
  const { stack } = props;

  return (
    <div>
      {stack.map((notification) => (
        <div key={notification.id}>{notification.text}</div>
      ))}
    </div>
  );
};

export default Notifications;
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useNotifications } from '../../contexts/notifications';

const MyComponent = (): JSX.Element => {
  const notifications = useNotification();

  const handleClick = (): void => {
    notifications.show({ text: 'hello' });
  };

  return (
    <div>
      <button onClick={handleClick}>notification</button>
    </div>
  );
};

export default MyComponent;
```

## Documentation

```typescript
export type createStackContext = <O extends StackOptions>(
  contextOptions: StackContextOptions,
) => [useStack<O>, React.ComponentType<StackProviderProps<O>>];

export type useStack<O> = () => StackRef<O>;

export type StackContextOptions = {
  defaultDuration?: number;
};

export type StackProviderProps<O extends StackOptions> = StackContextOptions & {
  Component: React.ComponentType<StackComponentProps<StackItem<O>>>;
  onRef?: (ref: StackRef<O>) => void;
};

export type StackRef<O extends StackOptions> = {
  show: ShowStackItem<O>;
  hideAll: () => void;
};

export type StackOptions<O = unknown> = O & {
  duration?: number;
};

export type StackItem<O = unknown> = StackOptions<O> & {
  id: string;
};

export type StackItemRef = {
  hide: () => void;
};

export type StackComponentProps<I extends StackItem> = {
  stack: I[];
};

export type ShowStackItem<O extends StackOptions> = (
  options: O,
) => StackItemRef;
```
