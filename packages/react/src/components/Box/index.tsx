import { ComponentProps, ElementType } from 'react';
import { styled } from '../../styles';

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$zinc800',
  border: '1px solid $zinc600',
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = 'Box';
