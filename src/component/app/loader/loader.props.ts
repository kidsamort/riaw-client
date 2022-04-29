import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum LoaderType {}

export interface LoaderProps {
  types?: LoaderType;
  children?: ReactNode;
}

export interface LoaderComponentProps
  extends LoaderProps,
    ComponentPropsWithoutRef<'div'> {}
