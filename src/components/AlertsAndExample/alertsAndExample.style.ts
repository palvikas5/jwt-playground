import styled from 'styled-components';
import { device } from '../../utils/device';

const StyledAlertsAndExample = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mediumAndAbove} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const StyledTokenInvalidWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-weight: bold;
  color: #d84c1a;
  background: #fce0cf;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;

  @media ${device.mediumAndAbove} {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const StyledInvalidInput = styled.div`
  margin-left: 10px;
`;

export {
  StyledAlertsAndExample,
  StyledInvalidInput,
  StyledTokenInvalidWrapper,
};
