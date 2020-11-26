import React from 'react';
import NextLink from 'next/link';
import {
  StyledHeaderContainer,
  StyledHeader,
  HeaderTitle,
} from './header.style';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader className='container'>
        <NextLink href='/' passHref>
          <HeaderTitle>JWT</HeaderTitle>
        </NextLink>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export { Header };
