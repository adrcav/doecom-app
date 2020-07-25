import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '../../components/theme';

export const CauseImage = styled.div`
  width: 100%;
  padding-top: 57.53%;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  background-color: #eaeaea;
  box-shadow: 0 -10px 5px -5px ${rgba('#E3E3E3', 0.3)};
  transition: all .3s ease-in-out;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${props => props.image}');
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all .25s ease-in-out;
    transition-timing-function: cubic-bezier(.57,.21,.69,1.25);
  }
`;

export const CauseTitleSection = styled.p`
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 20px;

  @media (min-height: 992px) and (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
  margin-top: 10px;

  &:after {
    content: "";
    width: 30px;
    height: 2px;
    background-color: ${colors.muted.m2};
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
