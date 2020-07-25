import styled from 'styled-components';
import { rgba } from 'polished';

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
`;
