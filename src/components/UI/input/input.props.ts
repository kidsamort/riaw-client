import { ComponentPropsWithoutRef } from 'react';

export enum InputIcon {
	MAIL = 'mail',
	PERSON = 'person',
	ARROW = 'arrow',
	PASS = 'pass',
}
export enum InputStatusIcon {
	CHECK = 'check',
	WARNING = 'warning',
	NONE = 'none',
}

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
	iconStatus?: InputStatusIcon;
	icon?: InputIcon;
	active?: boolean;
}
