import styled from 'styled-components';
import { device } from '../utils/device';

const StyledHomeContainer = styled.div`
  color: white;
  margin-bottom: 50px;

  .wrapper {
    .description {
      font-size: 2.6rem;
      text-align: center;
      margin-bottom: 30px;

      @media ${device.mediumAndAbove} {
        font-size: 3.5rem;
        margin: 0 30px 80px;
      }
    }

    .token-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 15px;

      @media ${device.mediumAndAbove} {
        flex-direction: row;
      }

      .token-heading {
        margin-bottom: 5px;
        padding-bottom: 5px;
        text-transform: uppercase;
      }

      .left {
        @media ${device.mediumAndAbove} {
          flex: 1;
          margin-right: 10px;
        }

        .raw-token {
          height: 250px;

          @media ${device.mediumAndAbove} {
            height: 450px;
          }
        }
      }

      .right {
        margin-top: 20px;

        @media ${device.mediumAndAbove} {
          flex: 1;
          margin-left: 10px;
          margin-top: auto;
        }

        .decoded-token {
          height: 350px;
          display: flex;
          flex-direction: column;

          @media ${device.mediumAndAbove} {
            height: 450px;
          }

          .decoded-token-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: auto;
            }

            &.header {
              flex-basis: 30%;
            }

            &.payload {
              flex-basis: 50%;
            }

            &.signature {
              flex-basis: 20%;
            }

            .decoded-token-heading {
              font-size: 1.4rem;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
`;

export { StyledHomeContainer };
