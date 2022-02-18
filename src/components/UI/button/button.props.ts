import { ComponentPropsWithoutRef } from 'react';

export enum ButtonIcon {
	PLUS = 'plus',
	LOADER = 'loader',
	CLOSE = 'close',
}

export enum ButtonColor {
	SECONDARY = '--button-secondary-bg',
	PRIMARY = '--button-primary-bg',
}
export enum ButtonSize {
	MEDIUM = 'md',
	SMALL = 'sm',
}

export interface ButtonProps extends ComponentPropsWithoutRef<'div'> {
	types?: 'secondary' | 'primary';
	color?: ButtonColor | string;
	size: 'md' | 'sm';
	stretch?: boolean;
	positionIcon?: 'start' | 'end';
	deactive?: boolean;
	icon?: ComponentPropsWithoutRef<'svg'> | ButtonIcon | false;
}
