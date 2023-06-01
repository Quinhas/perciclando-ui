import { Avatar, AvatarProps } from '@perciclando-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Quinhas.png',
    alt: 'Lucas Santana',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
