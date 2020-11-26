/* stylelint-disable value-keyword-case */

import styled from 'styled-components';
import { TextAreaProps } from './TextArea';

const StyledTextArea = styled.textarea<TextAreaProps>`
  display: block;
  width: 100%;
  height: inherit;
  flex: 1;
  padding: 10px;
  font-size: 1.7rem;
  border-radius: 3px;
  border: 1px solid #2f3b52;
  outline: 0;
  background-color: #20293c;
  color: white;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 0.16);
  ${({ noResize }) => noResize && `resize: none;`}

  &:focus {
    border-color: #3e8efa;
  }
`;

export { StyledTextArea };
