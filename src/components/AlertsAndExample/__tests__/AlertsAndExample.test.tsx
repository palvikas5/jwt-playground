import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { AlertsAndExample, AlertsAndExampleProps } from '../AlertsAndExample';
import { mockUseRouter } from '../../../lib/mockUseRouter';

const push = jest.fn();

const setup = (props: AlertsAndExampleProps) => {
  mockUseRouter({ push });

  return render(<AlertsAndExample {...props} />);
};

describe('alertsAndExample', () => {
  it('should render successfully without invalid alert', () => {
    expect.assertions(1);

    const { container } = setup({ isTokenInvalid: false });
    expect(container).toMatchSnapshot();
  });

  it('should render successfully with invalid token alert', () => {
    expect.assertions(1);

    const { container } = setup({ isTokenInvalid: true });
    expect(container).toMatchSnapshot();
  });

  it('should trigger router change on click of example button', () => {
    expect.assertions(1);

    const { getByText } = setup({ isTokenInvalid: true });
    const button = getByText('Try out an Example');
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith(
      '/?value=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    );
  });
});
