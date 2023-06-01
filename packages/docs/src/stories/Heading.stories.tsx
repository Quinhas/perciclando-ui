import { Heading, HeadingProps } from '@perciclando-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}
