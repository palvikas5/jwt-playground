import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HomePage, {
  getServerSideProps,
  HomePageQuery,
  HomePageProps,
} from '../pages/index';
import { mockUseRouter } from '../lib/mockUseRouter';

jest.useFakeTimers();

const setupProps = async ({ value }: HomePageQuery): Promise<HomePageProps> => {
  jest.clearAllTimers();
  const response = await getServerSideProps({ query: { value } });
  if ('redirect' in response || 'notFound' in response) {
    throw new Error('Not supported');
  }
  return response.props;
};

const setup = async ({ value }: HomePageQuery) => {
  const props = await setupProps({ value });
  return render(<HomePage {...props} />);
};

describe('homePage', () => {
  describe('getServerSideProps', () => {
    it('should return props from a valid rawToken', async () => {
      expect.assertions(1);

      const props = await setupProps({
        value:
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRHVtbXkgdG9rZW4iLCJ1c2VySWQiOiJkdW1teS11c2VySWQiLCJpYXQiOjE2MDU5ODg4MDgsImV4cCI6MTYwNTk4OTgwOCwiYXVkIjoiZHVtbXktYXVkaWVuY2UuY29tIn0.88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
      });
      expect(props).toStrictEqual({
        rawToken:
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRHVtbXkgdG9rZW4iLCJ1c2VySWQiOiJkdW1teS11c2VySWQiLCJpYXQiOjE2MDU5ODg4MDgsImV4cCI6MTYwNTk4OTgwOCwiYXVkIjoiZHVtbXktYXVkaWVuY2UuY29tIn0.88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
        decodedToken: {
          header: {
            alg: 'HS512',
            typ: 'JWT',
          },
          payload: {
            aud: 'dummy-audience.com',
            exp: 1605989808,
            iat: 1605988808,
            name: 'Dummy token',
            userId: 'dummy-userId',
          },
          signature:
            '88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
        },
      });
    });

    it('should return props from an invalid rawToken', async () => {
      expect.assertions(1);

      const props = await setupProps({
        value: 'hello-world',
      });
      expect(props).toStrictEqual({
        decodedToken: null,
        rawToken: 'hello-world',
      });
    });

    it('should return props when no token has been passed', async () => {
      expect.assertions(1);

      const props = await setupProps({ value: undefined });
      expect(props).toStrictEqual({
        decodedToken: null,
        rawToken: '',
      });
    });
  });

  describe('<HomePage />', () => {
    it('should render with a correct rawToken', async () => {
      expect.assertions(6);

      const { getByText, getByLabelText } = await setup({
        value:
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRHVtbXkgdG9rZW4iLCJ1c2VySWQiOiJkdW1teS11c2VySWQiLCJpYXQiOjE2MDU5ODg4MDgsImV4cCI6MTYwNTk4OTgwOCwiYXVkIjoiZHVtbXktYXVkaWVuY2UuY29tIn0.88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
      });

      expect(
        getByText('Sign, Decode and Verify JWT Tokens'),
      ).toBeInTheDocument();

      expect(() => getByText('Invalid input!')).toThrow('');

      const rawToken = getByLabelText('raw token').textContent;
      const header = getByLabelText('decoded token header').textContent;
      const payload = getByLabelText('decoded token payload').textContent;
      const signature = getByLabelText('decoded token signature').textContent;

      expect(rawToken).toBe(
        'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRHVtbXkgdG9rZW4iLCJ1c2VySWQiOiJkdW1teS11c2VySWQiLCJpYXQiOjE2MDU5ODg4MDgsImV4cCI6MTYwNTk4OTgwOCwiYXVkIjoiZHVtbXktYXVkaWVuY2UuY29tIn0.88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
      );
      expect(JSON.parse(header || '')).toStrictEqual({
        alg: 'HS512',
        typ: 'JWT',
      });
      expect(JSON.parse(payload || '')).toStrictEqual({
        aud: 'dummy-audience.com',
        exp: 1605989808,
        iat: 1605988808,
        name: 'Dummy token',
        userId: 'dummy-userId',
      });
      expect(signature).toStrictEqual(
        '88UM7ondqbU6bELfcBgiN_Qq-kPP4oCjED-NUPcLktiE0l_vNplNSRiRN-b20c8FMxKllhQ251RWO5f_LlMVXw',
      );
    });

    it('should render with an incorrect rawToken', async () => {
      expect.assertions(4);

      const { getByLabelText } = await setup({
        value: 'dummy-token',
      });

      const rawToken = getByLabelText('raw token').textContent;
      const header = getByLabelText('decoded token header').textContent;
      const payload = getByLabelText('decoded token payload').textContent;
      const signature = getByLabelText('decoded token signature').textContent;

      expect(rawToken).toBe('dummy-token');
      expect(header).toBe(`{}`);
      expect(payload).toBe(`{}`);
      expect(signature).toBe('');
    });

    it('should render with invalid token', async () => {
      expect.assertions(1);

      const { getByText } = await setup({
        value: 'dummy-token',
      });
      expect(getByText('Invalid input!')).toBeInTheDocument();
    });

    it('should route with changed raw token value', async () => {
      expect.assertions(1);

      const push = jest.fn();
      mockUseRouter({ push });

      const { getByLabelText } = await setup({
        value: 'dummy-token',
      });

      const rawToken = getByLabelText('raw token');
      fireEvent.change(rawToken, { target: { value: 'changed-value' } });
      expect(push).toHaveBeenCalledWith('/?value=changed-value');
    });
  });
});
