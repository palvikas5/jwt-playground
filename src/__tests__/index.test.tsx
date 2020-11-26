import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('index', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const { container } = render(<Index />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: red;
      }

      <div>
        <div
          class="c0"
        >
          <main>
            <h1>
              Welcome to
              <a
                href="https://nextjs.org"
              >
                Next.js!
              </a>
            </h1>
          </main>
        </div>
      </div>
    `);
  });
});
