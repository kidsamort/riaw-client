import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from '.';
import { ButtonProps, ButtonSize } from './button.props';
import { ReactComponent as GoogleIcon } from './icons/google.svg';

export default {
	title: 'UI/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Secondary = Template.bind({});

Secondary.args = {
	color: '--button-secondary-bg',
	size: ButtonSize.MEDIUM,
	children: 'Button',
};
export const Primary = Template.bind({});

Primary.args = {
	color: '--button-primary-bg',
	size: ButtonSize.MEDIUM,
	children: 'Button',
};
export const Deactive = Template.bind({});

Deactive.args = {
	color: '--button-primary-bg',
	size: ButtonSize.MEDIUM,
	children: 'Button',
	deactive: true,
};
export const Icon = Template.bind({});

Icon.args = {
	icon: <GoogleIcon />,
	color: '--button-secondary-bg',
	size: ButtonSize.MEDIUM,
	positionIcon: 'start',
	children: 'Button',
};
