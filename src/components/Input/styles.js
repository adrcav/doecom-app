import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../theme';

export const InputGroup = styled.div`
  position: relative;
  padding: 0;
  margin: 0 0 10px;

  &.has-icon {
    input,
    textarea {
      padding-left: 40px;
    }
  }

  .icon {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: ${colors.muted.m3};
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  &:focus-within {
    & + label {
      color: ${colors.action.primary.default};
    }
  }

  input,
  textarea {
    display: block;
    width: 100%;
    height: auto;
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
  }

  &.input--error {
    & + label {
      color: ${colors.action.danger.default};
    }

    input,
    textarea {
      border-color: ${colors.action.danger.default};
      box-shadow: 0 0 0 0.2rem ${rgba(colors.action.danger.default, 0.1)};
    }
  }
`;

// export const Container = styled.input`
//   display: block;
//   width: 100%;
//   height: auto;
//   background-color: ${colors.base.light};
//   padding: 15px 20px;
//   border: 1.5px solid ${colors.muted.m2};
//   border-radius: 6px;
//   outline: none;
//   transition: all .3s ease-in-out;
//   color: ${colors.base.dark};

//   &::placeholder {
//     color: ${colors.muted.m3};
//   }

//   &:focus {
//     border-color: ${colors.action.primary.default};
//     box-shadow: 0 0 0 0.2rem ${rgba(colors.action.primary.default, 0.1)};

//     & + label {
//       color: ${colors.action.primary.default};
//     }
//   }
// `;
