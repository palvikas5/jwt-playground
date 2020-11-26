import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsResult } from 'next';
import { StyledHomeContainer } from '../styles/index.style';
import TextArea from '../components/_core/TextArea/TextArea';
import { jwtDecode, Token } from '../utils/jwt';
import { AlertsAndExample } from '../components/AlertsAndExample/AlertsAndExample';

export interface HomePageProps {
  rawToken: string;
  decodedToken: Token | null;
}

export interface HomePageQuery {
  value: string | undefined;
}

export interface HomePageServerSideContext {
  query: HomePageQuery;
}

const HomePage = ({ rawToken, decodedToken }: HomePageProps) => {
  const router = useRouter();
  const isTokenInvalid = !decodedToken;
  const { header = {}, payload = {}, signature = '' } = decodedToken || {};

  const handleRawTokenChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    await router.push(`/?value=${value}`);
  };

  return (
    <StyledHomeContainer>
      <div className='wrapper container'>
        <h1 className='description'>Sign, Decode and Verify JWT Tokens</h1>
        <AlertsAndExample isTokenInvalid={isTokenInvalid} />
        <div className='token-wrapper'>
          <div className='left'>
            <div className='token-heading'>Encoded token</div>
            <div className='raw-token'>
              <TextArea
                value={rawToken}
                noResize
                onChange={handleRawTokenChange}
                placeholder='raw token'
                aria-label='raw token'
              />
            </div>
          </div>

          <div className='right'>
            <div className='token-heading'>Decoded token</div>
            <div className='decoded-token'>
              <div className='decoded-token-item header'>
                <div className='decoded-token-heading'>Header</div>
                <TextArea
                  value={JSON.stringify(header, null, 2)}
                  noResize
                  placeholder='decoded token'
                  aria-label='decoded token header'
                />
              </div>
              <div className='decoded-token-item payload'>
                <div className='decoded-token-heading'>Payload</div>
                <TextArea
                  value={JSON.stringify(payload, null, 2)}
                  noResize
                  placeholder='decoded token'
                  aria-label='decoded token payload'
                />
              </div>
              <div className='decoded-token-item signature'>
                <div className='decoded-token-heading'>Signature</div>
                <TextArea
                  value={signature}
                  noResize
                  placeholder='decoded token'
                  aria-label='decoded token signature'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHomeContainer>
  );
};

const getServerSideProps = ({
  query,
}: HomePageServerSideContext): GetServerSidePropsResult<HomePageProps> => {
  const rawToken = query.value || '';
  const decodedToken = jwtDecode(rawToken);

  return {
    props: {
      rawToken,
      decodedToken,
    },
  };
};

export { getServerSideProps };
export default HomePage;
