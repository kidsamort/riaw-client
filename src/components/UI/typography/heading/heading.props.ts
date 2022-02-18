import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum HeadingType {
	H1 = 1,
	H2,
	H3,
	H4,
}

export interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
	types: HeadingType;
	children: ReactNode;
}
