import constants from '../constants';
import { jwtDecode } from '../jwt';

describe('jwt', () => {
  it('should decode the raw token', () => {
    expect.assertions(1);

    const decodedToken = jwtDecode(constants.defaultRawToken);
    expect(decodedToken).toStrictEqual({
      header: { alg: 'HS256', typ: 'JWT' },
      payload: { iat: 1516239022, name: 'John Doe', sub: '1234567890' },
      signature: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    });
  });
});
