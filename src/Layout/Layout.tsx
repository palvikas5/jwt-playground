import React from 'react';
import { Header } from '../components/Header/Header';
import { GlobalStyle } from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export { Layout };
