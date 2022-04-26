import { Navigate, useParams } from 'react-router-dom';
import {
	ChangeEvent,
	FocusEvent,
	KeyboardEvent,
	useEffect,
	useState,
} from 'react';

import { activation } from './codeInput';
import { CodeInputComponentProps } from './codeInput.props';
import { Input, InputCode } from './codeInput.styled';
import { isNumber } from 'util';

export const CodeInput = ({
	className,
	children,
	...props
}: CodeInputComponentProps): JSX.Element => {
	const { form } = useParams();
	const [code, setCode] = useState(['', '', '', '']);
	const [focus, setFocus] = useState({ value: '', name: '' });
	const [key, setKey] = useState<string>('');

	const getFocusData = (e: FocusEvent<HTMLInputElement, Element>) => {
		setFocus({ value: e.target.value, name: e.target.name });
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (key.length === 1) {
			code[Number(e.target.name)] = key;
			setCode([...code]);

			if (e.target.value.length > 0 && Number(e.target.name) < 3) {
				const nextInput: HTMLInputElement | null = document.querySelector(
					`input[name=\"${Number(e.target.name) + 1}\"]`,
				);
				nextInput?.focus();
			}
		}
	};
	const backChar = (e: KeyboardEvent<HTMLInputElement>) => {
		setKey(e.key);
		if (
			e.key === 'Backspace' &&
			focus.value.length >= 0 &&
			Number(focus.name) >= 0
		) {
			code[Number(focus.name)] = '';
			setCode([...code]);
			const backInput: HTMLInputElement | null = document.querySelector(
				`input[name=\"${Number(focus.name) - 1}\"]`,
			);
			backInput?.focus();
		}
	};

	return (
		<Input>
			{form === 'activation' ? (
				code.map((item, id) => {
					return (
						<InputCode
							key={id}
							onChange={handleChange}
							onKeyDown={backChar}
							onFocus={getFocusData}
							name={String(id)}
							value={code[id]}
							type={'text'}
						/>
					);
				})
			) : (
				<Navigate to="signin" replace={true} />
			)}
		</Input>
	);
};
