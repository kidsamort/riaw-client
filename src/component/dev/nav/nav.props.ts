import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface NavProps extends ComponentPropsWithoutRef<'div'> {
	children?: ReactNode;
}
