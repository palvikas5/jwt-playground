import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

describe('layout', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(<Layout>Test 1</Layout>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        Test 1
      </div>
    `);
  });
});
