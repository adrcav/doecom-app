import styled from 'styled-components';

import { colors } from '../../components/theme';

export const SafeAlert = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.15rem;
    color: ${colors.action.secondary.default};
    margin-right: 5px;
  }

  p {
    margin: 0;
    color: ${colors.muted.m4};
    font-size: .9rem;
    line-height: 1.2rem;
  }
`;
