import React from 'react';
import { noop } from '../../../utils/noop';
import { StyledButton } from './button.style';

interface ButtonProps {
  onClick?: () => void;
  children: string | number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children }: ButtonProps, ref) => {
    return (
      <StyledButton type='button' onClick={onClick} ref={ref}>
        {children}
      </StyledButton>
    );
  },
);

Button.defaultProps = {
  onClick: noop,
};

export default Button;
