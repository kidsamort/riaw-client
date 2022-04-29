import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DividerProps {
  size?: number;
  direction?: 'horizontal' | 'vertical';
  children?: ReactNode;
}

export interface DividerComponentProps
  extends DividerProps,
    ComponentPropsWithoutRef<'div'> {}
