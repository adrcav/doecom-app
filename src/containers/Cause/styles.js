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

  @media (min-width: 992px) and (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: 9px;
  }
`;

export const CauseFeature = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  .CauseFeature__icon {
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${colors.muted.m4};
  }

  .CauseFeature__content {
    display: flex;
    flex-direction: column;
    padding-top: 6px;
  }

  .CauseFeature__title {
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.base.dark};
    line-height: 1.1rem;
    margin: 0;
  }

  .CauseFeature__description {
    font-size: .9rem;
    color: ${colors.muted.m4};
    line-height: 1.25rem;
    text-align: justify;
    margin: 5px 0 0;
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
