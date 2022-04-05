import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum EmptyType {}

export interface EmptyProps extends ComponentPropsWithoutRef<'div'> {
	types?: EmptyType;
	children?: ReactNode;
}
