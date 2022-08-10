import React, { ComponentType, ContextType, PropsWithChildren } from 'react';
export declare type StackProviderProps<P> = {
    defaultDuration?: number;
    onRef?: (ref: StackRef<P>) => void;
};
export declare type StackContextOptions = {
    defaultDuration: number;
};
export declare type StackRef<P> = {
    show: ShowStackItem<P>;
};
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
export declare type StackComponentProps<S = unknown> = {
    stack: S[];
};
export declare type ShowStackItem<O = unknown> = (options: Omit<O, keyof StackItemBase>) => StackItemRef;
declare const createStackContext: <C extends React.ComponentType<StackComponentProps<unknown>>, P = C extends React.ComponentType<StackComponentProps<infer I>> ? I : never>(Component: React.ComponentType<StackComponentProps<P>>, contextOptions: StackContextOptions) => [() => {
    show: ShowStackItem<P>;
}, (props: React.PropsWithChildren<StackProviderProps<P>>) => JSX.Element];
export default createStackContext;
