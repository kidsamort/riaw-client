import { ChangeEvent, useState } from 'react';

interface InputCode {
	name: string;
	autoFocus?: boolean;
}

export const activation: InputCode[] = [
	{
		name: 'char-1',
		autoFocus: true,
	},
	{
		name: 'char-2',
	},
	{
		name: 'char-3',
	},
	{
		name: 'char-4',
	},
];
