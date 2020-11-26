import React from 'react';
import { render } from '@testing-library/react';
import Link from '../Link';

describe('<Link />', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(
      <Link href='https://dummy-link-url'>link-text</Link>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should contains allowed values as children', () => {
    expect.assertions(2);

    const wrapper = render(
      <Link href='https://dummy-link-url'>link-text</Link>,
    );
    expect(wrapper.getByText(/^link-text$/)).toBeInTheDocument();

    const wrapper1 = render(<Link href='https://dummy-link-url'>{1}</Link>);
    expect(wrapper1.getByText(/^1$/)).toBeInTheDocument();
  });

  it('should render successfully as a button', () => {
    expect.assertions(1);

    const { container } = render(
      <Link href='https://dummy-link-url' asButton>
        link-text
      </Link>,
    );
    expect(container).toMatchSnapshot();
  });
});
