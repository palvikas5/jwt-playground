import React from 'react';
import { GlobalStyle } from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export { Layout };
