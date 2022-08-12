import { useStateSafe, useTimeout } from '@drpiou/react-utils';
import filter from 'lodash/filter';
import uniqueId from 'lodash/uniqueId';
import React, {
  ComponentType,
  ContextType,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

export type StackContextOptions = {
  defaultDuration?: number;
};

export type StackProviderProps<O extends StackOptions> = StackContextOptions & {
  Component: ComponentType<StackComponentProps<StackItem<O>>>;
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

export type ShowStackItem<O extends StackOptions> = (options: O) => StackItemRef;

const createStackContext = <O extends StackOptions>(contextOptions: StackContextOptions): [typeof useCtx, typeof Provider] => {
  const ctx = createContext<StackRef<O>>({
    show: () => ({ hide: () => undefined }),
    hideAll: () => undefined,
  });

  const Provider = (props: PropsWithChildren<StackProviderProps<O>>): JSX.Element => {
    const { Component, defaultDuration, onRef, children } = props;

    const timeout = useTimeout();

    const handleRef = useRef(onRef);

    handleRef.current = onRef;

    const [stack, setStack] = useStateSafe<StackItem<O>[]>([]);

    const show: ShowStackItem<O> = useCallback(
      (options) => {
        const stackItemId = uniqueId('stack-item:');

        const stackItem: StackItem<O> = { ...options, id: stackItemId };

        setStack((oldStack) => [...oldStack, stackItem]);

        const hide = (): void => {
          setStack((oldStack) => {
            return filter(oldStack, (oldStackItem) => {
              return oldStackItem.id !== stackItemId;
            });
          });
        };

        const duration = stackItem.duration ?? defaultDuration ?? contextOptions.defaultDuration;

        if (duration) {
          timeout.set(hide, duration);
        }

        return { hide };
      },
      [defaultDuration, setStack, timeout],
    );

    const hideAll = useCallback((): void => {
      setStack(() => []);
    }, [setStack]);

    const ref = useMemo(() => {
      return { show, hideAll };
    }, [show, hideAll]);

    useEffect(() => {
      handleRef.current?.(ref);
    }, [ref]);

    return (
      <ctx.Provider value={ref}>
        {children}

        <Component stack={stack} />
      </ctx.Provider>
    );
  };

  const useCtx = (): ContextType<typeof ctx> => {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside StackProvider?");
    }

    return c;
  };

  return [useCtx, Provider];
};

export default createStackContext;
