import { Text, TextProps } from '@perciclando-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed mauris ut mi iaculis luctus sit amet quis dolor. Nulla facilisi. Ut at ante nisi.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<TextProps> = {};
