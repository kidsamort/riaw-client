import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export enum TextType {}

export interface TextProps extends ComponentPropsWithoutRef<'div'> {
  type?: FlattenSimpleInterpolation;
  children?: ReactNode;
}
