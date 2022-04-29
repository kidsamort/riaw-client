import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { allIcon } from '../icon/icon';
import { IconSize } from '../icon/icon.props';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  types?: 'primary' | 'secondary';
  color?: string;
  size?: 'md' | 'sm';
  icon?: keyof typeof allIcon;
  iconRight?: boolean;
  iconSize?: IconSize;
  iconColor?: string;
  deActive?: boolean;
  children?: ReactNode;
}
