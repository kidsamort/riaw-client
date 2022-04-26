import { allIcon } from 'component/UI/icon/icon';
import { HTMLInputTypeAttribute } from 'react';

interface InputAuth {
	icon: keyof typeof allIcon;
	type: HTMLInputTypeAttribute;
	name: string;
	autoComplete?: string;
	placeholder: string;
	autoFocus?: boolean;
	iconRight?: keyof typeof allIcon;
	ariaAutocomplete?: 'list' | 'none' | 'inline' | 'both' | undefined;
}

export const signUp: InputAuth[] = [
	{
		icon: 'mail',
		type: 'email',
		name: 'email',
		autoFocus: true,
		autoComplete: 'email',
		placeholder: 'Почта',
	},
	{
		icon: 'profile-circle',
		type: 'name',
		name: 'username',
		placeholder: 'Никнейм',
	},
	{
		icon: 'lock',
		iconRight: 'showFill',
		type: 'password',
		name: 'password',
		autoComplete: 'new-password',
		placeholder: 'Придумайте пароль',
		ariaAutocomplete: 'list',
	},
];
export const signIn: InputAuth[] = [
	{
		icon: 'mail',
		type: 'name',
		name: 'login',
		autoFocus: true,
		autoComplete: 'email',
		placeholder: 'Имя или почта',
	},
	{
		icon: 'lock',
		iconRight: 'showFill',
		type: 'password',
		name: 'password',
		autoComplete: 'current-password',
		placeholder: 'Пароль',
	},
];
