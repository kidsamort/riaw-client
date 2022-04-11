import { Meta, Story } from '@storybook/react';
import { Empty } from './index';
import { EmptyProps } from './empty.props';

export default {
	title: 'Category/Empty',
	component: Empty,
	parameters: {
		themes: {
			Empty: 'dark',
		},
	},
} as Meta;

const Template: Story<EmptyProps> = (args) => <Empty {...args} />;

export const Emptys = Template.bind({});

Emptys.args = {};
