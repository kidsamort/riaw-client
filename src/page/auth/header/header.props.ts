import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AuthLinkType } from '../index';

export interface HeaderProps {
  url?: AuthLinkType;
  children?: ReactNode;
}

export interface HeaderComponentProps
  extends HeaderProps,
    ComponentPropsWithoutRef<'div'> {}
