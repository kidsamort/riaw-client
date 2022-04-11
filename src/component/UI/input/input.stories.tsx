import { Meta, Story } from '@storybook/react';
import { Input } from './index';
import { InputComponentProps } from './input.props';

export default {
	title: 'Category/Input',
	component: Input,
	parameters: {
		themes: {
			Input: 'dark',
		},
	},
} as Meta;

const Template: Story<InputComponentProps> = (args) => <Input {...args} />;

export const Inputs = Template.bind({});

Inputs.args = {
	placeholder: 'Ваш email',
	icon: 'calendar',
	iconRight: 'basket',
};
