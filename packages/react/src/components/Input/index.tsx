import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Input as InputComponent, InputContainer, Prefix } from './styles';

export interface InputProps extends ComponentProps<typeof InputComponent> {
  prefix?: string;
}

export const Input = forwardRef<ElementRef<typeof InputComponent>, InputProps>(
  ({ prefix, ...props }: InputProps) => {
    return (
      <InputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <InputComponent {...props} />
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';
