import styled from 'styled-components';

import { colors } from '../../components/theme';

export const TermsContainer = styled.div`
  color: ${colors.muted.m5};

  h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  ul,
  ol {
    margin-left: 20px;
  }
`;
