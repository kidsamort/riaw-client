import { Meta, Story } from '@storybook/react';
import { Loader } from './index';
import { LoaderProps } from './loader.props';

export default {
  title: 'Category/Loader',
  component: Loader,
  parameters: {
    themes: {
      Loader: 'dark',
    },
  },
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Loaders = Template.bind({});

Loaders.args = {};
