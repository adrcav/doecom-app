import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';

export const Container = styled.div`
  width: 175px;
  height: 175px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${rgba(colors.base.dark, 0.15)};
  border-radius: 50%;
  font-size: 6rem;
  color: ${colors.base.dark};

  &.primary {
    background-color: ${rgba(colors.action.primary.default, 0.15)};
    color: ${colors.action.primary.default};
  }

  &.secondary {
    background-color: ${rgba(colors.action.secondary.default, 0.15)};
    color: ${colors.action.secondary.default};
  }

  &.danger {
    background-color: ${rgba(colors.action.danger.default, 0.15)};
    color: ${colors.action.danger.default};
  }
`;
