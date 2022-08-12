import React from 'react';
import './Toasts.css';
import { StackComponentProps } from '../../lib';
import { Toast } from '../contexts/toasts';

const Toasts = (props: StackComponentProps<Toast>): JSX.Element => {
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
