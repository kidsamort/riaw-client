import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum OauthType {}

export interface OauthProps {
  types?: OauthType;
  children?: ReactNode;
}

export interface OauthComponentProps
  extends OauthProps,
    ComponentPropsWithoutRef<'div'> {}
