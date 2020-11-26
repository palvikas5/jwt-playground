import React from 'react';
import { StyledTextArea } from './textArea.style';
import { noop } from '../../../utils/noop';

export interface TextAreaProps {
  value: string;
  'aria-label': string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  noResize?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      value,
      onChange,
      placeholder,
      noResize,
      'aria-label': ariaLabel,
    }: TextAreaProps,
    ref,
  ) => {
    return (
      <StyledTextArea
        noResize={noResize}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={ariaLabel}
        ref={ref}
      />
    );
  },
);

TextArea.defaultProps = {
  onChange: noop,
};

export default TextArea;
