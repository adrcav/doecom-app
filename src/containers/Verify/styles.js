import styled from 'styled-components';

import { rotate } from '../../components/keyframes';
import { colors } from '../../components/theme';

export const Container = styled.div`
  width: 100%;
  padding: 40px 30px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(128, 0, 159, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 30px 20px;
  }

  .loading-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    position: relative;

    .spinner:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      margin-top: -20px;
      margin-left: -20px;
      border-radius: 50%;
      border: 2px solid ${colors.muted.m1};
      border-top-color: ${colors.action.primary.default};
      animation: ${rotate} .7s linear infinite;
    }
  }

  .verify-success {
    display: flex;
    flex-direction: column;
    align-items: center;

    .verify-success-icon {
      font-size: 3rem;
      color: ${colors.action.secondary.default};
    }
  }
`;
