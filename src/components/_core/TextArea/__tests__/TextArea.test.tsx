import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextArea from '../TextArea';

describe('<TextArea />', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(
      <TextArea
        value='textarea value'
        placeholder='enter value here'
        aria-label='aria text'
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should contains value as children', () => {
    expect.assertions(1);

    const { getByText } = render(
      <TextArea value='textarea value' aria-label='aria text' />,
    );
    expect(getByText(/^textarea value$/)).toBeInTheDocument();
  });

  it('should render successfully without resize controls', () => {
    expect.assertions(1);

    const { container } = render(
      <TextArea
        value='textarea value'
        placeholder='enter value here'
        aria-label='aria text'
        noResize
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should trigger onChange event', () => {
    expect.assertions(2);

    const mockChangeHandler = jest.fn();
    const { getByText } = render(
      <TextArea
        value='textarea value'
        onChange={mockChangeHandler}
        aria-label='aria text'
      />,
    );
    const textarea = getByText(/^textarea value$/);
    expect(textarea.textContent).toBe('textarea value');
    fireEvent.change(textarea, { target: { value: 'changed-value' } });
    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
  });
});
