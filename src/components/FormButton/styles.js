import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';
import { rotate } from '../keyframes';

export const Container = styled.button`
  width: 100%;
  padding: 15px 40px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid;
  transition: all .3s ease-in-out;
  position: relative;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;

  &.primary {
    background-color: ${colors.action.primary.default};
    border-color: ${colors.action.primary.default};
    color: white;
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.primary.default, 0.25)};

    &:hover {
      background-color: ${colors.action.primary.hover};
      border-color: ${colors.action.primary.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.primary.hover, 0.25)};
    }
  }
  &.primary-outline {
    background-color: transparent;
    border-color: ${colors.action.primary.default};
    color: ${colors.action.primary.default};
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.primary.default, 0.25)};

    &:hover {
      border-color: ${colors.action.primary.hover};
      color: ${colors.action.primary.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.primary.hover, 0.25)};
    }
  }

  &.secondary {
    background-color: ${colors.action.secondary.default};
    border-color: ${colors.action.secondary.default};
    color: white;
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.secondary.default, 0.25)};

    &:hover {
      background-color: ${colors.action.secondary.hover};
      border-color: ${colors.action.secondary.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.secondary.hover, 0.25)};
    }
  }
  &.secondary-outline {
    background-color: transparent;
    border-color: ${colors.action.secondary.default};
    color: ${colors.action.secondary.default};
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.secondary.default, 0.25)};

    &:hover {
      border-color: ${colors.action.secondary.hover};
      color: ${colors.action.secondary.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.secondary.hover, 0.25)};
    }
  }

  &.danger {
    background-color: ${colors.action.danger.default};
    border-color: ${colors.action.danger.default};
    color: white;
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.danger.default, 0.25)};

    &:hover {
      background-color: ${colors.action.danger.hover};
      border-color: ${colors.action.danger.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.danger.hover, 0.25)};
    }
  }
  &.danger-outline {
    background-color: transparent;
    border-color: ${colors.action.danger.default};
    color: ${colors.action.danger.default};
    box-shadow: 0 5px 15px 1px ${rgba(colors.action.danger.default, 0.25)};

    &:hover {
      border-color: ${colors.action.danger.hover};
      color: ${colors.action.danger.hover};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.danger.hover, 0.25)};
    }
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
`;
