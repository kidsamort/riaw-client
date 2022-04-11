import { Meta, Story } from '@storybook/react';
import Auth from './index';
import { AuthProps } from './auth.props';

export default {
	title: 'Page/Auth',
	component: Auth,
	parameters: {
		themes: {
			Auth: 'dark',
		},
	},
} as Meta;

const Template: Story<AuthProps> = (args) => <Auth {...args} />;

export const Auths = Template.bind({});

Auths.args = {};
