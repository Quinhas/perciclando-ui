import { Button, type ButtonProps } from '@perciclando-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    isDisabled: false,
    loadingText: 'Loading',
    isLoading: false,
    spinnerPlacement: 'start',
  },
  argTypes: {
    spinnerPlacement: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio',
      },
    },
    loadingText: {
      defaultValue: 'Loading',
      description: 'The loading text when loading state is true',
      type: 'string',
    },
    isLoading: {
      type: 'boolean',
    },
    colorScheme: {
      name: 'colorScheme',
      defaultValue: 'primary',
      options: [
        'blue',
        'green',
        'red',
        'yellow',
        'gray',
        'zinc',
        'primary',
        'white',
        'black',
        'facebook',
        'twitter',
        'linkedin',
        'messenger',
        'whatsapp',
        'telegram',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['solid', 'outline', 'ghost', 'link'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

export const Solid: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
  },
};
export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
};
export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
};
export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
  },
};
