import { Meta, Story } from '@storybook/react';
import { Input } from './index';
import { InputIcon, InputProps, InputStatusIcon } from './input.props';

export default {
	title: 'UI/Input',
	component: Input,
	parameters: {
		themes: {
			default: 'dark',
		},
	},
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
	icon: InputIcon.MAIL,
	placeholder: 'Ваша почта',
	type: 'emial',
	name: 'email',
};
export const Warning = Template.bind({});

Warning.args = {
	icon: InputIcon.ARROW,
	value: 'kidsamort@gmail.com',
	placeholder: 'Ваша почта',
	iconStatus: InputStatusIcon.WARNING,
};
export const Success = Template.bind({});

Success.args = {
	icon: InputIcon.MAIL,
	value: 'kidsamort@gmail.com',
	placeholder: 'Ваша почта',
	iconStatus: InputStatusIcon.CHECK,
};
export const Password = Template.bind({});

Password.args = {
	icon: InputIcon.PASS,
	placeholder: 'Пароль',
	autoComplete: 'new-password',
	name: 'password',
	type: 'password',
};
