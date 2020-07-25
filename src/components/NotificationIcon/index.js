import React from 'react';
import * as FontAwesome from 'react-icons/fa';

import { Container } from './styles';

const NotificationIcon = ({ theme, icon }) => {
  const Icon = FontAwesome[icon] || FontAwesome['FaCheck'];
  return (
    <Container className={theme}>
      <Icon />
    </Container>
  );
};

export default NotificationIcon;
