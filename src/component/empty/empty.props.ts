import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum EmptyType {}

export interface EmptyProps {
	types?: EmptyType;
	children?: ReactNode;
}

export interface EmptyComponentProps
	extends EmptyProps,
		ComponentPropsWithoutRef<'div'> {}
