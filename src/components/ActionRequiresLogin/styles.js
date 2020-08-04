import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 510;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all .2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
`;

export const Modal = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 7px;
  padding: 15px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .1);
  transition: all .3s ease-in-out;
  transition-timing-function: cubic-bezier(.57,.21,.69,1.25);
  visibility: hidden;
  opacity: 0;
  transform: translateY(30px);

  &.show {
    visibility: visible;
    opacity: 1;
    transform: translateY(50px);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${colors.muted.m2};
  margin-bottom: 10px;

  h2 {
    font-size: 1.15rem;
    color: ${colors.base.dark};
    line-height: 1.4rem;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  margin-bottom: 10px;

  p {
    margin: 0;
    font-size: .95rem;
    color: ${colors.muted.m5};
  }
`;
