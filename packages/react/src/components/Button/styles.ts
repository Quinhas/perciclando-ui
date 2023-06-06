import { keyframes, styled } from '../../styles';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const StyledButton = styled('button', {
  $$textColor: '$colors$white',

  all: 'unset',
  display: 'flex',
  gap: '$2',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  lineHeight: '$shorter',
  borderRadius: '$md',
  fontWeight: '$semibold',
  fontFamily: '$default',
  transitionProperty: '$transitions$property-common',
  transitionDuration: '$transitions$duration-normal',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  color: '$$textColor',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    opacity: '0.75',
    cursor: 'not-allowed',
  },

  '&:focus-visible': {
    boxShadow: '$outline',
  },

  variants: {
    isLoading: {
      true: {
        cursor: 'default',
        '& svg': {
          animation: `${rotate} $transitions$duration-slower linear infinite`,
        },
      },
    },

    colorScheme: {
      blue: {
        $$lighterColor: '$colors$blue50',
        $$lightColor: '$colors$blue100',
        $$baseColor: '$colors$blue500',
        $$darkColor: '$colors$blue600',
        $$darkerColor: '$colors$blue700',
        $$textColor: '$colors$white',
      },

      green: {
        $$lighterColor: '$colors$green50',
        $$lightColor: '$colors$green100',
        $$baseColor: '$colors$green500',
        $$darkColor: '$colors$green600',
        $$darkerColor: '$colors$green700',
        $$textColor: '$colors$white',
      },

      red: {
        $$lighterColor: '$colors$red50',
        $$lightColor: '$colors$red100',
        $$baseColor: '$colors$red500',
        $$darkColor: '$colors$red600',
        $$darkerColor: '$colors$red700',
        $$textColor: '$colors$white',
      },

      yellow: {
        $$lighterColor: '$colors$yellow50',
        $$lightColor: '$colors$yellow100',
        $$baseColor: '$colors$yellow500',
        $$darkColor: '$colors$yellow600',
        $$darkerColor: '$colors$yellow700',
        $$textColor: '$colors$black',
      },

      gray: {
        $$lighterColor: '$colors$gray200',
        $$lightColor: '$colors$gray300',
        $$baseColor: '$colors$gray500',
        $$darkColor: '$colors$gray600',
        $$darkerColor: '$colors$gray700',
        $$textColor: '$colors$white',
      },

      zinc: {
        $$lighterColor: '$colors$zinc200',
        $$lightColor: '$colors$zinc300',
        $$baseColor: '$colors$zinc500',
        $$darkColor: '$colors$zinc600',
        $$darkerColor: '$colors$zinc700',
        $$textColor: '$colors$white',
      },

      primary: {
        $$lighterColor: '$colors$primary50',
        $$lightColor: '$colors$primary100',
        $$baseColor: '$colors$primary500',
        $$darkColor: '$colors$primary600',
        $$darkerColor: '$colors$primary700',
        $$textColor: '$colors$white',
      },

      white: {
        $$lighterColor: '$colors$zinc800',
        $$lightColor: '$colors$zinc900',
        $$baseColor: '$colors$white',
        $$darkColor: '$colors$zinc300',
        $$darkerColor: '$colors$zinc400',
        $$textColor: '$colors$black',
      },

      black: {
        $$lighterColor: '$colors$zinc300',
        $$lightColor: '$colors$zinc400',
        $$baseColor: '$colors$black',
        $$darkColor: '$colors$zinc700',
        $$darkerColor: '$colors$zinc800',
        $$textColor: '$colors$white',
      },

      facebook: {
        $$lighterColor: '$colors$facebook50',
        $$lightColor: '$colors$facebook100',
        $$baseColor: '$colors$facebook500',
        $$darkColor: '$colors$facebook600',
        $$darkerColor: '$colors$facebook700',
        $$textColor: '$colors$white',
      },

      twitter: {
        $$lighterColor: '$colors$twitter50',
        $$lightColor: '$colors$twitter100',
        $$baseColor: '$colors$twitter500',
        $$darkColor: '$colors$twitter600',
        $$darkerColor: '$colors$twitter700',
        $$textColor: '$colors$white',
      },

      linkedin: {
        $$lighterColor: '$colors$linkedin50',
        $$lightColor: '$colors$linkedin100',
        $$baseColor: '$colors$linkedin500',
        $$darkColor: '$colors$linkedin600',
        $$darkerColor: '$colors$linkedin700',
        $$textColor: '$colors$white',
      },

      messenger: {
        $$lighterColor: '$colors$messenger50',
        $$lightColor: '$colors$messenger100',
        $$baseColor: '$colors$messenger500',
        $$darkColor: '$colors$messenger600',
        $$darkerColor: '$colors$messenger700',
        $$textColor: '$colors$white',
      },

      whatsapp: {
        $$lighterColor: '$colors$whatsapp50',
        $$lightColor: '$colors$whatsapp100',
        $$baseColor: '$colors$whatsapp500',
        $$darkColor: '$colors$whatsapp600',
        $$darkerColor: '$colors$whatsapp700',
        $$textColor: '$colors$white',
      },

      telegram: {
        $$lighterColor: '$colors$telegram50',
        $$lightColor: '$colors$telegram100',
        $$baseColor: '$colors$telegram500',
        $$darkColor: '$colors$telegram600',
        $$darkerColor: '$colors$telegram700',
        $$textColor: '$colors$white',
      },
    },

    variant: {
      solid: {
        backgroundColor: '$$baseColor',

        '&:hover:not([disabled])': {
          backgroundColor: '$$darkColor',
        },

        '&:active:not([disabled])': {
          backgroundColor: '$$darkerColor',
        },
      },

      outline: {
        border: '1px solid currentcolor',
        color: '$$baseColor',
        backgroundColor: 'transparent',

        '&:hover:not([disabled])': {
          backgroundColor: '$$lighterColor',
        },

        '&:active:not([disabled])': {
          backgroundColor: '$$lightColor',
        },
      },

      ghost: {
        color: '$$baseColor',
        backgroundColor: 'transparent',

        '&:hover:not([disabled])': {
          backgroundColor: '$$lighterColor',
        },

        '&:active:not([disabled])': {
          backgroundColor: '$$lightColor',
        },
      },

      link: {
        color: '$$baseColor',

        '&:hover:not([disabled])': {
          color: '$$darkColor',
        },

        '&:active:not([disabled])': {
          color: '$$darkerColor',
        },
      },
    },

    size: {
      xs: {
        height: '$6',
        minWidth: '$6',
        fontSize: '$xs',
        paddingInlineStart: '$2',
        paddingInlineEnd: '$2',
      },
      sm: {
        height: '$8',
        minWidth: '$8',
        fontSize: '$sm',
        paddingInlineStart: '$3',
        paddingInlineEnd: '$3',
      },
      md: {
        height: '$10',
        minWidth: '$10',
        fontSize: '$md',
        paddingInlineStart: '$4',
        paddingInlineEnd: '$4',
      },
      lg: {
        height: '$12',
        minWidth: '$12',
        fontSize: '$lg',
        paddingInlineStart: '$6',
        paddingInlineEnd: '$6',
      },
    },
  },

  defaultVariants: {
    colorScheme: 'primary',
    variant: 'solid',
    size: 'md',
  },
});
