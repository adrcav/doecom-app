import styled from 'styled-components';
import { rgba } from 'polished';

import { rotate } from './keyframes';
import { colors } from './theme';

export const LoadingSpinner = styled.div`
  content: '';
  box-sizing: border-box;
  width: ${props => props.width || '40px'};
  height: ${props => props.width || '40px'};
  border-radius: 50%;
  border: 3px solid ${colors.action.primary.default};
  border-top-color: ${rgba(colors.action.primary.default, 0.15)};
  animation: ${rotate} .6s linear infinite;
`;

export const InputError = styled.span`
  color: ${colors.action.danger.default};
  font-size: .9rem;
`;
