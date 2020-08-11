import styled from 'styled-components';

import { colors } from '../../components/theme';

export const TermsCard = styled.div`
  width: 100%;
  max-height: 200px;
  padding: 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .1);
  overflow-y: scroll;
  color: ${colors.muted.m5};

  p {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

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

  @media (max-width: 991px) {
    max-height: 300px;
  }
`;
