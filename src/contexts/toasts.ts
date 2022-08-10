import { createStackContext, StackComponentProps, StackItem, StackItemRef, StackOptions } from '../../lib';
import Toasts from '../Toasts';

export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type ToastOnClose = () => void;

export type ToastOptions = StackOptions<{
  text: string;
  type?: ToastType;
  onClose?: ToastOnClose;
}>;

export type Toast = StackItem<ToastOptions>;

export type ToastRef = StackItemRef;

export type ToastsComponentProps = StackComponentProps<Toast>;

export const [useToast, ToastProvider] = createStackContext(Toasts, {
  defaultDuration: 3000,
});
