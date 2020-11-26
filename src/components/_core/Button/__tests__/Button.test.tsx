import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(
      <Button onClick={jest.fn()}>button-text</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should contains allowed values as children', () => {
    expect.assertions(2);

    const wrapper = render(<Button>button-text</Button>);
    expect(wrapper.getByText(/^button-text$/)).toBeInTheDocument();

    const wrapper1 = render(<Button>{1}</Button>);
    expect(wrapper1.getByText(/^1$/)).toBeInTheDocument();
  });

  it('should trigger onClick function', () => {
    expect.assertions(1);

    const clickHandler = jest.fn();
    const { getByText } = render(
      <Button onClick={clickHandler}>button-text</Button>,
    );
    const button = getByText('button-text');
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
