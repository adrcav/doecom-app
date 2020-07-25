import styled from 'styled-components';

import { rotate } from '../keyframes';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111116;
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
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .35);
    border-top-color: white;
    animation: ${rotate} .6s linear infinite;
  }
`;
