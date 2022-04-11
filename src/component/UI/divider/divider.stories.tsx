import { Meta, Story } from '@storybook/react';
import { Divider } from './index';
import { DividerProps } from './divider.props';

export default {
	title: 'Category/Divider',
	component: Divider,
	parameters: {
		themes: {
			Divider: 'dark',
		},
	},
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Dividers = Template.bind({});

Dividers.args = {};
