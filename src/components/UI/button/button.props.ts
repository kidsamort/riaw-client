import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'div'> {
	Type: 'primary' | 'secondary';
	size: 'medium' | 'small';
	icon?: string[];
	deActive?: boolean;
	right?: boolean;
	stretch?: boolean;
	children?: ReactNode;
}
