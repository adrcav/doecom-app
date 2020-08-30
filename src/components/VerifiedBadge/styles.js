import styled from 'styled-components';

import { colors } from '../theme';

export const Badge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  background-color: ${colors.asset.info};
  border: 2px solid white;
  margin-left: 5px;
  border-radius: 50%;

  font-size: .55rem;
  color: white;
`;
