import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AuthLinkType } from '../index';

export interface AuthInputProps {
  url?: AuthLinkType;
  children?: ReactNode;
}

export interface AuthInputComponentProps
  extends AuthInputProps,
    ComponentPropsWithoutRef<'div'> {}
