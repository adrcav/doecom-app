import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.label`
  font-weight: 500;
  color: ${colors.muted.m4};
  margin-bottom: .3rem;
  transition: all .3s ease-in-out;

  .Container__help {
    font-size: .8rem;
    font-weight: 400;
    color: ${colors.muted.m3};
    font-style: italic;
    margin-left: 10px;
  }

  &.active {
    color: ${colors.action.primary.default};
  }

  &.error {
    color: ${colors.action.danger.default};
  }
`;
