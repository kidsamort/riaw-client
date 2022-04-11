import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum DevType {}

export interface DevProps extends ComponentPropsWithoutRef<'div'> {
	types?: DevType;
	children?: ReactNode;
}
