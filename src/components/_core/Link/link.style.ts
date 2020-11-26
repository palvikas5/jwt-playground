/* stylelint-disable value-keyword-case */

import styled from 'styled-components';
import { LinkProps } from './Link';

const StyledLink = styled.a<LinkProps>`
  display: block;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  ${({ asButton }) =>
    asButton &&
    `
    background-color: #3e8efa;
    text-transform: uppercase;
    padding: 12px 30px;
    border: none;
    border-radius: 3px;
  `}
`;

export { StyledLink };
