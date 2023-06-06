import { CircleNotch } from '@phosphor-icons/react';
import { ComponentProps, ReactNode } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  isDisabled?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  spinnerPlacement?: 'start' | 'end';
  spinner?: ReactNode;
}

export function Button({
  isLoading = false,
  loadingText = 'Loading',
  isDisabled = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  spinnerPlacement = 'start',
  spinner = <CircleNotch weight="bold" />,
  ...rest
}: ButtonProps) {
  if (isLoading) {
    return (
      <StyledButton
        isLoading
        disabled
        {...rest}
      >
        {spinnerPlacement === 'start' && spinner}
        {loadingText}
        {spinnerPlacement === 'end' && spinner}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      disabled={isDisabled || disabled}
      {...rest}
    >
      {!leftIcon && leftIcon}
      {children}
      {!rightIcon && rightIcon}
    </StyledButton>
  );
}
