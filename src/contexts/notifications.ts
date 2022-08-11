import { createStackContext, StackItem, StackOptions } from '../../lib';
import Notifications from '../Notifications';

export type NotificationType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type NotificationOnClose = () => void;

export type NotificationOptions = StackOptions<{
  text: string;
  type?: NotificationType;
  onClose?: NotificationOnClose;
}>;

export type Notification = StackItem<NotificationOptions>;

export const [useNotification, NotificationProvider] = createStackContext(Notifications, {
  defaultDuration: 3000,
});
