import styled from 'styled-components';
import { rgba } from 'polished';

import { rotate } from '../keyframes';
import { colors } from '../theme';

export const InputGroup = styled.div`
  position: relative;
  padding: 0;
  margin: 0 0 10px;

  &:focus-within {
    & + label {
      color: ${colors.action.primary.default};
    }
  }

  &.input--error {
    & + label {
      color: ${colors.action.danger.default};
    }
  }

  .InputGroup__loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .35);
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    &.InputGroup__loading--show {
      visibility: visible;
      opacity: 1;
    }
  }

  .InputGroup__spinner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, .1);
    border-top-color: ${colors.action.primary.default};
    animation: ${rotate} .6s linear infinite;
  }
`;

export const Container = styled.select`
  display: block;
  width: 100%;
  height: auto;
  min-height: 57px;
  background-color: ${colors.base.light};
  padding: 15px 20px;
  border: 1.5px solid ${colors.muted.m2};
  border-radius: 6px;
  outline: none;
  transition: all .3s ease-in-out;
  color: ${colors.base.dark};

  &::placeholder {
    color: ${colors.muted.m3};
  }

  &:focus {
    border-color: ${colors.action.primary.default};
    box-shadow: 0 0 0 0.2rem ${rgba(colors.action.primary.default, 0.1)};

    & + label {
      color: ${colors.action.primary.default};
    }
  }

  &.input--error {
    border-color: ${colors.action.danger.default};
  }
`;
