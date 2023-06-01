import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary500',

        '&:not(:disabled):hover': {
          background: '$primary300',
        },

        '&:disabled': {
          background: '$zinc200',
        },
      },
      secondary: {
        color: '$primary500',
        border: '2px solid $primary500',

        '&:not(:disabled):hover': {
          background: '$primary500',
          color: '$white',
        },

        '&:disabled': {
          background: '$zinc200',
          color: '$zinc200',
        },
      },
      tertiary: {
        color: '$zinc100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$zinc600',
        },
      },
    },

    size: {
      sm: {
        height: '$10',
      },
      md: {
        height: '$12',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
