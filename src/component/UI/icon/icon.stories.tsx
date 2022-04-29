import { Meta, Story } from '@storybook/react';
import { Icon } from './index';
import { IconProps, IconSize } from './icon.props';
import { color } from 'style/helpers.styled';

export default {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    themes: {
      Icon: 'dark',
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});

Icons.args = {
  size: IconSize.md,
  name: 'add',
  color: color.primary.blue,
};
