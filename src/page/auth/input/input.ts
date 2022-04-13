import { allIcon } from 'component/UI/icon/icon';
import { HTMLInputTypeAttribute } from 'react';

interface InputAuth {
	id: number;
	icon: keyof typeof allIcon;
	type: HTMLInputTypeAttribute;
	name: string;
	autoComplete?: string;
	placeholder: string;
	autoFocus?: boolean;
	iconRight?: keyof typeof allIcon;
}

export const signup: InputAuth[] = [
	{
		id: 1,
		icon: 'mail',
		type: 'email',
		name: 'email',
		autoFocus: true,
		autoComplete: 'email',
		placeholder: 'Почта',
	},
	{
		id: 2,
		icon: 'profile-circle',
		type: 'name',
		name: 'username',
		placeholder: 'Никнейм',
	},
	{
		id: 3,
		icon: 'lock',
		iconRight: 'showFill',
		type: 'password',
		name: 'password',
		autoComplete: 'new-password',
		placeholder: 'Пароль',
	},
];
export const signin: InputAuth[] = [
	{
		id: 4,
		icon: 'mail',
		type: 'name',
		name: 'login',
		autoFocus: true,
		autoComplete: 'email',
		placeholder: 'Имя или почта',
	},
	{
		id: 5,
		icon: 'lock',
		iconRight: 'showFill',
		type: 'password',
		name: 'password',
		autoComplete: 'current-password',
		placeholder: 'Пароль',
	},
];
