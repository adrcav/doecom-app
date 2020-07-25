import styled from 'styled-components';

import { colors, lengths } from '../theme';

export const Container = styled.ul`
  margin: auto 20px auto 0;
  position: relative;

  li {
    display: inline-flex;
    align-items: center;

    .menu-item {
      display: flex;
      align-items: center;

      & > .icon {
        width: 25px;
        height: 25px;
        background-color: rgba(0, 0, 0, .1);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.base.dark};
        font-size: .9rem;
        margin-right: 5px;
        transition: all .3s ease-in-out;
      }

      & > p {
        margin: 0;
        font-weight: 500;
        color: ${colors.base.dark};
        transition: all .3s ease-in-out;
      }

      &:hover {
        & > .icon,
        & > p {
          color: ${colors.action.primary.default};
        }
      }

      &.active {
        & > .icon {
          background-color: ${colors.brand.dark};
          color: white;
        }

        & > p {
          color: ${colors.brand.dark};
        }
      }
    }
  }

  &.horizontal {
    @media (max-width: 991px) {
      display: none;
    }

    &:after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: rgba(0, 0, 0, .15);
      position: absolute;
      top: 0;
      right: 0;
    }

    li {
      margin-right: 20px;
    }
  }

  &.vertical {
    display: block;
    padding: 10px 20px 7px;
    margin: 0;
    margin-top: -10px;
    background-color: ${colors.base.light};
    position: fixed;
    top: ${lengths.header.default};
    left: 0;
    z-index: 499;
    width: 100%;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, .1);
    transition: transform .3s ease-in-out;
    transition-timing-function: cubic-bezier(.57,.21,.69,1.25);
    transform: translateY(-100%);

    @media (min-width: 992px) {
      display: none !important;
    }

    &.show {
      transform: translateY(0);
      transition-duration: .4s;
    }

    li {
      width: 100%;
      margin: 0;
      border-top: 1px solid rgba(0, 0, 0, .1);
      padding: 10px 0;
    }
  }
`;
