import React from 'react';
export declare type StackItemBase = {
    id: string;
};
export declare type StackOptions<P = unknown> = P & {
    duration?: number;
};
export declare type StackItem<P = unknown> = P & StackOptions<StackItemBase>;
export declare type StackItemRef = {
    hide: () => void;
};
export declare type StackComponentProps<N = unknown> = {
    stack: N[];
};
export declare type StackProviderProps = {
    defaultDuration?: number;
};
export declare type ShowStackItem<O = unknown> = (options: Omit<O, keyof StackItemBase>) => StackItemRef;
export declare const createStackContext: <C extends React.ComponentType<StackComponentProps<unknown>>, P = C extends React.ComponentType<StackComponentProps<infer I>> ? I : never>(Component: React.ComponentType<StackComponentProps<P>>) => [() => {
    show: ShowStackItem<P>;
}, (props: React.PropsWithChildren<StackProviderProps>) => JSX.Element];
