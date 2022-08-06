# `@drpiou/react-stack`

![GitHub](https://img.shields.io/github/license/drpiou/react-stack)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-stack)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)

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

### `contexts/notifications/index.tsx`

```typescript jsx
import {
  createStackContext,
  StackComponentProps,
  StackItem,
  StackItemRef,
  StackOptions,
} from '@drpiou/react-stack';
import Notifications from '../../components/Notifications';

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

export type NotificationRef = StackItemRef;

export type NotificationsComponentProps = StackComponentProps<Notification>;

export const [useNotification, NotificationProvider] = createStackContext(
  Notifications,
  {
    defaultDuration: 3000,
  },
);
```

### `App.tsx`

```typescript jsx
import { NotificationProvider } from './contexts/notifications';

const App = (): JSX.Element => {
  return <NotificationProvider>{/* ... */}</NotificationProvider>;
};

export default App;
```

### `components/Notifications/index.tsx`

```typescript jsx
import { NotificationsComponentProps } from '../../contexts/notifications';

const Notifications = (props: NotificationsComponentProps): JSX.Element => {
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
  const notifications = useNotifications();

  const handlePress = (): void => {
    notifications.show({ text: 'hello' });
  };

  return <div onClick={handlePress} />;
};

export default MyComponent;
```

## Documentation

```typescript
type createStackContext = <
  C extends React.ComponentType<StackComponentProps>,
  P = C extends React.ComponentType<StackComponentProps<infer I>> ? I : never,
>(
  Component: React.ComponentType<StackComponentProps<P>>,
) => [useStack<P>, StackProvider];

type useStack<P> = () => {
  show: ShowStackItem<P>;
};

type StackProvider = (props: StackProviderProps) => JSX.Element;

type StackProviderProps = {
  defaultDuration?: number; // default: 3000
};

type ShowStackItem<O = unknown> = (
  options: Omit<O, keyof StackItemBase>,
) => StackItemRef;

type StackItemRef = {
  hide: () => void;
};

type StackItemBase = {
  id: string;
};

type StackOptions<P = unknown> = P & {
  duration?: number;
};

type StackItem<P = unknown> = P & StackOptions<StackItemBase>;

type StackComponentProps<S = unknown> = {
  stack: S[];
};
```
