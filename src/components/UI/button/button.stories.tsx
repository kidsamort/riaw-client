import { Meta, Story } from '@storybook/react';
import { Button } from '.';
import { icons } from '../icon/ui';
import { ButtonProps } from './button.props';

export default {
	title: 'UI/Button',
	component: Button,
	parameters: {
		themes: {
			Button: 'dark',
		},
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	icon: icons.home,
	Type: 'primary',
	size: 'medium',
	children: 'кнопка',
};
export const Secondary = Template.bind({});

Secondary.args = {
	icon: icons.home,
	Type: 'secondary',
	size: 'medium',
	children: 'кнопка',
};

export const deActive = Template.bind({});

deActive.args = {
	Type: 'secondary',
	size: 'medium',
	children: 'кнопка',
	deActive: true,
};
