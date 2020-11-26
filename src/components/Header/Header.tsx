import React from 'react';
import {
  StyledHeaderContainer,
  StyledHeader,
  HeaderTitle,
} from './header.style';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader className='container'>
        <HeaderTitle>JWT</HeaderTitle>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export { Header };
