import { useStateSafe, useTimeout } from '@drpiou/react-utils';
import filter from 'lodash/filter';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

export type StackProviderProps = {
  defaultDuration?: number;
};

export type StackContextOptions = {
  defaultDuration: number;
};

export type StackItemBase = {
  id: string;
};

export type StackOptions<P = unknown> = P & {
  duration?: number;
};

export type StackItem<P = unknown> = P & StackOptions<StackItemBase>;

export type StackItemRef = {
  hide: () => void;
};

export type StackComponentProps<S = unknown> = {
  stack: S[];
};

export type ShowStackItem<O = unknown> = (options: Omit<O, keyof StackItemBase>) => StackItemRef;

const createStackContext = <
  C extends React.ComponentType<StackComponentProps>,
  P = C extends React.ComponentType<StackComponentProps<infer I>> ? I : never,
>(
  Component: React.ComponentType<StackComponentProps<P>>,
  contextOptions: StackContextOptions,
): [typeof useCtx, typeof Provider] => {
  const ctx = React.createContext<{
    show: ShowStackItem<P>;
  }>({
    show: () => ({ hide: () => undefined }),
  });

  const Provider = (props: React.PropsWithChildren<StackProviderProps>): JSX.Element => {
    const { defaultDuration, children } = props;

    const timeout = useTimeout();

    const [stack, setStack] = useStateSafe<StackItem<P>[]>([]);

    const show: ShowStackItem<P> = React.useCallback(
      (options) => {
        const stackItemId = uniqueId('stack-item:');

        const stackItem = { ...options, id: stackItemId } as StackItem<P>;

        setStack((oldStack) => [...oldStack, stackItem]);

        const hide = (): void => {
          setStack((oldStack) => {
            return filter(oldStack, (oldStackItem) => {
              return oldStackItem.id !== stackItemId;
            });
          });
        };

        if (stackItem.duration !== 0) {
          timeout.set(hide, stackItem.duration ?? defaultDuration ?? contextOptions.defaultDuration);
        }

        return { hide };
      },
      [defaultDuration, setStack, timeout],
    );

    return (
      <ctx.Provider value={{ show }}>
        {children}

        <Component stack={stack} />
      </ctx.Provider>
    );
  };

  const useCtx = (): React.ContextType<typeof ctx> => {
    const c = React.useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside StackProvider?");
    }

    return c;
  };

  return [useCtx, Provider];
};

export default createStackContext;
