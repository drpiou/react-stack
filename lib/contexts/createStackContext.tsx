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

export type StackProviderProps<P> = {
  defaultDuration?: number;
  onRef?: (ref: StackRef<P>) => void;
};

export type StackContextOptions = {
  defaultDuration: number;
};

export type StackRef<P> = {
  show: ShowStackItem<P>;
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
  C extends ComponentType<StackComponentProps>,
  P = C extends ComponentType<StackComponentProps<infer I>> ? I : never,
>(
  Component: ComponentType<StackComponentProps<P>>,
  contextOptions: StackContextOptions,
): [typeof useCtx, typeof Provider] => {
  const ctx = createContext<{
    show: ShowStackItem<P>;
  }>({
    show: () => ({ hide: () => undefined }),
  });

  const Provider = (props: PropsWithChildren<StackProviderProps<P>>): JSX.Element => {
    const { defaultDuration, onRef, children } = props;

    const timeout = useTimeout();

    const handleRef = useRef(onRef);

    handleRef.current = onRef;

    const [stack, setStack] = useStateSafe<StackItem<P>[]>([]);

    const show: ShowStackItem<P> = useCallback(
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

    const ref = useMemo(() => {
      return { show };
    }, [show]);

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
