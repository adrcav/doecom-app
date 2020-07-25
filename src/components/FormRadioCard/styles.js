import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${colors.base.light};
    border: 2px solid ${colors.muted.m2};
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;

    .check {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: ${colors.action.primary.default};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: white;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(30%, 30%);
      transition: all .3s ease-in-out;
      opacity: 0;
      visibility: hidden;
    }
  }

  .icon {
    font-size: 1.5rem;
    color: ${colors.muted.m4};
    transition: all .3s ease-in-out;
  }

  p {
    margin: 0;
    font-weight: 500;
    color: ${colors.muted.m4};
    transition: all .3s ease-in-out;
  }

  input {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    &:checked + label {
      border-color: ${colors.action.primary.default};
      box-shadow: 0 3px 6px 1px ${rgba(colors.action.primary.default, 0.15)};

      .icon {
        color: ${colors.action.primary.default};
      }

      p {
        color: ${colors.action.primary.default};
      }

      .check {
        transition-delay: .1s;
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
