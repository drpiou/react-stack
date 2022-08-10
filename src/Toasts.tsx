import React from 'react';
import './Toasts.css';
import { ToastsComponentProps } from './contexts/toasts';

const Toasts = (props: ToastsComponentProps): JSX.Element => {
  const { stack } = props;

  return (
    <div className={'toasts'}>
      {stack.map((toast) => (
        <div key={toast.id}>{toast.text}</div>
      ))}
    </div>
  );
};

export default Toasts;
