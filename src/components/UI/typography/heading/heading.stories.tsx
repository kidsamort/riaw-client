import { Meta, Story } from '@storybook/react';
import { Heading } from './index';
import { HeadingProps, HeadingType } from './heading.props';

export default {
	title: 'Typography/Heading',
	component: Heading,
	parameters: {
		themes: {
			default: 'dark',
		},
	},
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const h1 = Template.bind({});

h1.args = {
	types: HeadingType.H1,
	children: 'h1',
};
export const h2 = Template.bind({});

h2.args = {
	types: HeadingType.H2,
	children: 'h2',
};
export const h3 = Template.bind({});

h3.args = {
	types: HeadingType.H3,
	children: 'h3',
};
export const h4 = Template.bind({});

h4.args = {
	types: HeadingType.H4,
	children: 'h4',
};
