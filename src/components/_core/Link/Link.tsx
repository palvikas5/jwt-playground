import React from 'react';
import { StyledLink } from './link.style';

export interface LinkProps {
  href: string;
  children: string | number;
  asButton?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, asButton, children }: LinkProps, ref) => {
    return (
      <StyledLink asButton={asButton} ref={ref} href={href}>
        {children}
      </StyledLink>
    );
  },
);

Link.defaultProps = {
  asButton: false,
};

export default Link;
