import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('header', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
