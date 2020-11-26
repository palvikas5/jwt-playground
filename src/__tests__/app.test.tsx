import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/_app';

describe('app', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const Component = (props: any) => (
      <div>{`Component Props: ${JSON.stringify(props)}`}</div>
    );

    const props = { hello: 'world' };

    const { getByText } = render(
      <App Component={Component} pageProps={props} />,
    );

    expect(getByText(/^Component Props:/).textContent).toBe(
      'Component Props: {"hello":"world"}',
    );
  });
});
