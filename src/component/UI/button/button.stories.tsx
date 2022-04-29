import { Meta, Story } from '@storybook/react';
import { Button } from './index';
import { ButtonProps } from './button.props';

export default {
  title: 'Category/Button',
  component: Button,
  parameters: {
    themes: {
      Button: 'dark',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});

Buttons.args = {
  types: 'primary',
  children: 'qwee',
};
