import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum InputType {}

export interface InputProps extends ComponentPropsWithoutRef<'div'> {
	startIcon?: string[];
	endIcon?: string[];
	children?: ReactNode;
}
