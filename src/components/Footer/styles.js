import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${colors.muted.m5};
    font-size: .9rem;
    transition: all .3s ease-in-out;
  }

  & > ul {
    margin: 0;

    li {
      display: inline-block;
      position: relative;
      padding-right: 15px;
      margin-right: 15px;

      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 20px;
        background-color: rgba(0, 0, 0, .1);
        top: 1px;
        right: 0;
      }

      &:last-child {
        padding-right: 0;
        margin-right: 0;

        &:after {
          display: none;
        }
      }

      &:hover {
        p {
          color: ${colors.brand.dark};
        }
      }

      @media (max-width: 768px) {
        display: block;
        padding-right: 0;
        margin-right: 0;
        text-align: center;

        &:after {
          display: none;
        }
      }
    }
  }
`;
