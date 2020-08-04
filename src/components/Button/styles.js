import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';
import { rotate } from '../keyframes';

export const Container = styled.button`
  padding: 3px 18px 3px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  border: 1.5px solid;
  transition: all .3s ease-in-out;
  position: relative;
  overflow: hidden;

  & > .icon {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .75rem;
    border-radius: 50%;
    margin-right: 5px;
    transition: all .3s ease-in-out;
    visibility: visible;
    opacity: 1;
  }

  & > p {
    font-size: .9rem;
    font-weight: 500;
    line-height: 1rem;
    transition: all .3s ease-in-out;
    visibility: visible;
    opacity: 1;
  }

  .Container__spinner {
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;

    &:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, .35);
      border-top-color: white;
      animation: ${rotate} .6s linear infinite;
    }
  }

  &.Container--has-loading {
    & > span {
      visibility: hidden;
    }

    .Container__spinner {
      visibility: visible;
      opacity: 1;
    }
  }

  &.Container--has-loading {
    p,
    .icon {
      visibility: hidden;
      opacity: 0;
    }
  }

  &.primary {
    background-color: ${colors.action.primary.default};
    border-color: ${colors.action.primary.default};

    .icon {
      background-color: rgba(255, 255, 255, .3);
      color: white;
    }

    p {
      color: white;
      margin: 0;
    }

    .Container__spinner {
      &:before {
        border-color: rgba(255, 255, 255, .35);
        border-top-color: white;
      }
    }

    &:hover {
      background-color: ${colors.action.primary.hover};
      border-color: ${colors.action.primary.hover};
    }
  }
  &.primary-outline {
    background-color: transparent;
    border-color: ${colors.action.primary.default};

    .icon {
      background-color: ${rgba(colors.action.primary.default, 0.15)};
      color: ${colors.action.primary.default};
    }

    p {
      color: ${colors.action.primary.default};
      margin: 0;
    }

    .Container__spinner {
      &:before {
        border-color: rgba(255, 255, 255, .35);
        border-top-color: ${colors.action.primary.default};
      }
    }

    &:hover {
      border-color: ${colors.action.primary.hover};

      .icon {
        background-color: ${rgba(colors.action.primary.hover, 0.15)};
        color: ${colors.action.primary.hover};
      }

      p {
        color: ${colors.action.primary.hover};
      }
    }
  }
`;
