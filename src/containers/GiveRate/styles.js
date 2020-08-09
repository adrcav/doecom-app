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

export const RateExperience = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto 10px;

  .RateExperience__option {
    width: 100%;
    display: flex;
    margin: auto 5px;

    @media (max-width: 468px) {
      p {
        font-size: 0;
      }

      label {
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
`;
