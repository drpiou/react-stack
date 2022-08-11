import { createStackContext, StackItem, StackOptions } from '../../lib';
import Toasts from '../Toasts';

export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type ToastOnClose = () => void;

export type ToastOptions = StackOptions<{
  text: string;
  type?: ToastType;
  onClose?: ToastOnClose;
}>;

export type Toast = StackItem<ToastOptions>;

export const [useToast, ToastProvider] = createStackContext(Toasts, {
  defaultDuration: 3000,
});
