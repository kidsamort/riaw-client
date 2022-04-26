import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum CodeInputType {}

export interface CodeInputProps {
	types?: CodeInputType;
	children?: ReactNode;
}

export interface CodeInputComponentProps
	extends CodeInputProps,
		ComponentPropsWithoutRef<'div'> {}
