import { Box, Text, TextArea, TextAreaProps } from '@perciclando-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextAreaProps> = {
  title: 'Form/Text Area',
  component: TextArea,
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
      )
    },
  ],
}

export default meta

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
