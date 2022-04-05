import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
	names: string[];
	size?: number;
	fill?: string;
}
