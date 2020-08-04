import styled from 'styled-components';

import { colors } from '../theme';

export const Wrapper = styled.div`
  width: ${props => props.width};
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;
  /* width: 120px;
  height: 120px; */
  width: 100%;
  padding-top: ${props => props.ratioHeight}%;
`;

export const ImagePreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NoImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${colors.muted.m2};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .NoImage__icon {
    font-size: 1.8rem;
    color: ${colors.muted.m4};
  }

  .NoImage__text {
    font-size: .8rem;
    color: ${colors.muted.m4};
    margin: 0;
  }
`;

export const ImageEdit = styled.p`
  position: absolute;
  bottom: 7px;
  right: 7px;
  background-color: rgba(0, 0, 0, .6);
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: .8rem;
  margin: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 3;

  svg {
    margin-right: 5px;
  }
`;
