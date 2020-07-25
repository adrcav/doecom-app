import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';

export const Container = styled.button`
  padding: 3px 18px 3px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  border: 1.5px solid;
  transition: all .3s ease-in-out;

  & > .icon {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .75rem;
    border-radius: 50%;
    margin-right: 5px;
    transition: all .3s ease-in-out;
  }

  & > p {
    font-size: .9rem;
    font-weight: 500;
    line-height: 1rem;
    transition: all .3s ease-in-out;
  }

  &.primary {
    background-color: ${colors.action.primary.default};
    border-color: ${colors.action.primary.default};

    .icon {
      background-color: rgba(255, 255, 255, .3);
      color: white;
    }

    p {
      color: white;
      margin: 0;
    }

    &:hover {
      background-color: ${colors.action.primary.hover};
      border-color: ${colors.action.primary.hover};
    }
  }
  &.primary-outline {
    background-color: transparent;
    border-color: ${colors.action.primary.default};

    .icon {
      background-color: ${rgba(colors.action.primary.default, 0.15)};
      color: ${colors.action.primary.default};
    }

    p {
      color: ${colors.action.primary.default};
      margin: 0;
    }

    &:hover {
      border-color: ${colors.action.primary.hover};

      .icon {
        background-color: ${rgba(colors.action.primary.hover, 0.15)};
        color: ${colors.action.primary.hover};
      }

      p {
        color: ${colors.action.primary.hover};
      }
    }
  }
`;
