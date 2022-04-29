import { Meta, Story } from '@storybook/react';
import { Text } from './index';
import { TextProps } from './text.props';

export default {
  title: 'Category/Text',
  component: Text,
  parameters: {
    themes: {
      Text: 'dark',
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Texts = Template.bind({});

Texts.args = {};
