import styled from 'styled-components';
import { rgba } from 'polished';

import { rotate } from '../keyframes';
import { colors } from '../theme';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    border-radius: 50%;
    border: 3px solid ${colors.action.primary.default};
    border-top-color: ${rgba(colors.action.primary.default, 0.15)};
    animation: ${rotate} .6s linear infinite;
  }
`;
