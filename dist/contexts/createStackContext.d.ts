import React, { ComponentType, ContextType, PropsWithChildren } from 'react';
export declare type StackContextOptions = {
    defaultDuration?: number;
};
export declare type StackProviderProps<O extends StackOptions> = StackContextOptions & {
    Component: ComponentType<StackComponentProps<StackItem<O>>>;
    onRef?: (ref: StackRef<O>) => void;
};
export declare type StackRef<O extends StackOptions> = {
    show: ShowStackItem<O>;
    hideAll: () => void;
};
export declare type StackOptions<O = unknown> = O & {
    duration?: number;
};
export declare type StackItem<O = unknown> = StackOptions<O> & {
    id: string;
};
export declare type StackItemRef = {
    hide: () => void;
};
export declare type StackComponentProps<I extends StackItem> = {
    stack: I[];
};
export declare type ShowStackItem<O extends StackOptions> = (options: O) => StackItemRef;
declare const createStackContext: <O extends {
    duration?: number | undefined;
}>(contextOptions: StackContextOptions) => [() => StackRef<O>, (props: React.PropsWithChildren<StackProviderProps<O>>) => JSX.Element];
export default createStackContext;
