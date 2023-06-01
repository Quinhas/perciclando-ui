import { Box, Input, InputProps, Text } from '@perciclando-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<InputProps> = {
  title: 'Form/Input',
  component: Input,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Label</Text>
          {Story()}
        </Box>
      );
    },
  ],
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
};
