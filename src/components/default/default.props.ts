import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum DefaultType {}

export interface DefaultProps extends ComponentPropsWithoutRef<'div'> {
	types?: DefaultType;
	children?: ReactNode;
}
