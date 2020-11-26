import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../_core/Button/Button';
import constants from '../../utils/constants';
import {
  StyledAlertsAndExample,
  StyledTokenInvalidWrapper,
  StyledInvalidInput,
} from './alertsAndExample.style';

export interface AlertsAndExampleProps {
  isTokenInvalid: boolean;
}

const AlertsAndExample = ({ isTokenInvalid }: AlertsAndExampleProps) => {
  const router = useRouter();

  const navigateToExample = () => {
    router.push(`/?value=${constants.defaultRawToken}`);
  };

  return (
    <StyledAlertsAndExample>
      {isTokenInvalid && (
        <StyledTokenInvalidWrapper>
          <Image src='/warning.svg' alt='warning' width='20' height='20' />
          <StyledInvalidInput>Invalid input!</StyledInvalidInput>
        </StyledTokenInvalidWrapper>
      )}
      <Button onClick={navigateToExample}>Try out an Example</Button>
    </StyledAlertsAndExample>
  );
};

export { AlertsAndExample };
