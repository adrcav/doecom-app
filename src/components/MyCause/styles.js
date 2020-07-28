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
  margin-bottom: 25px;

  @media (max-width: 991px) {
    align-items: flex-start;
  }

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
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.4rem;
      margin: 0;
      color: ${colors.base.dark};
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:hover {
        color: ${colors.action.primary.default};
      }

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }

    p {
      margin: 0;
      font-weight: 500;
      color: ${colors.muted.m4};
      font-size: .9rem;

      @media (max-width: 768px) {
        font-size: .85rem;
      }
    }

    .cause-list {
      margin: 2px 0 0;

      li {
        display: inline-flex;
        align-items: center;
        margin-left: 15px;

        @media (max-width: 991px) {
          display: flex;
          margin-left: 0;
        }

        p {
          display: flex;
          align-items: center;
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .cause-actions {
    p {
      margin: 0;
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:hover {
        color: ${colors.action.primary.default};
      }
    }
  }
`;
