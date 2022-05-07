import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface HeaderProps {
  children?: ReactNode;
}

export interface HeaderComponentProps
  extends HeaderProps,
    ComponentPropsWithoutRef<'div'> {}
