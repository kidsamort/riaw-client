import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AuthLinkType } from '../index';

export interface CodeInputProps {
  url?: AuthLinkType;
  children?: ReactNode;
}

export interface CodeInputComponentProps
  extends CodeInputProps,
    ComponentPropsWithoutRef<'div'> {}
