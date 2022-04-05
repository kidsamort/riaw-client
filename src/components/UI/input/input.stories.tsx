import { Meta, Story } from '@storybook/react';
import { Input } from './index';
import { InputProps } from './input.props';

export default {
	title: 'UI/Input',
	component: Input,
	parameters: {
		themes: {
			Input: 'dark',
		},
	},
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Inputs = Template.bind({});

Inputs.args = {};
