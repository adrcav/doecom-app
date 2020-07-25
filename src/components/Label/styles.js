import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.label`
  font-weight: 500;
  color: ${colors.muted.m4};
  margin-bottom: .3rem;
  transition: all .3s ease-in-out;

  &.active {
    color: ${colors.action.primary.default};
  }
`;
