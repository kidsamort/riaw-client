import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { allIcon } from './icon';

export enum IconSize {
	xs = 16,
	sm = 24,
	md = 48,
	xl = 64,
}
export interface IconProps extends ComponentPropsWithoutRef<'div'> {
	size: IconSize | number;
	color?: string;
	name?: keyof typeof allIcon;
}
