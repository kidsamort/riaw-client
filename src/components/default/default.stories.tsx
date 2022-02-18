import { Meta, Story } from '@storybook/react';
import { Default } from './index';
import { DefaultProps } from './default.props';

export default {
	title: 'Typography/Default',
	component: Default,
	parameters: {
		themes: {
			default: 'dark',
		},
	},
} as Meta;

const Template: Story<DefaultProps> = (args) => <Default {...args} />;

export const Defaults = Template.bind({});

Defaults.args = {};
