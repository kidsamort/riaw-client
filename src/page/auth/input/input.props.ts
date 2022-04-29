import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum AuthInputType {}

export interface AuthInputProps {
  types?: AuthInputType;
  children?: ReactNode;
}

export interface AuthInputComponentProps
  extends AuthInputProps,
    ComponentPropsWithoutRef<'div'> {}
