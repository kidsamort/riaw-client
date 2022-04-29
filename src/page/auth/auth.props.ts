import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface AuthProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}
