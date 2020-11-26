import jsonwebtoken from 'jsonwebtoken';

interface Token {
  header: any;
  payload: any;
  signature: string;
}

const jwtDecode = (token: string): Token | null => {
  const decodedToken = jsonwebtoken.decode(token, {
    complete: true,
    json: true,
  });

  if (!decodedToken) {
    return null;
  }

  return {
    header: decodedToken.header,
    payload: decodedToken.payload,
    signature: decodedToken.signature,
  };
};

export type { Token };
export { jwtDecode };
