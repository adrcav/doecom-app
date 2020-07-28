import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .cause-avatar {
    width: 60px;
    height: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 10px;
  }

  .cause-account {
    margin: 0;
    flex: 1;
    max-width: 100%;
    overflow: hidden;

    h2 {
      font-size: 1.4rem;
      font-weight: 800;
      line-height: 1.6rem;
      margin: 0;
      color: ${colors.base.dark};
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 1.2rem;
        line-height: 1.4rem;
      }
    }

    p {
      margin: 0;
      font-weight: 500;
      color: ${colors.muted.m4};
      font-size: .95rem;

      @media (max-width: 768px) {
        font-size: .9rem;
      }
    }
  }
`;
