import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import messages from './messages';

import { Badge } from './styles';

const VerifiedBadge = () => {
  const intl = useIntl();

  return (
    <Badge title={intl.formatMessage(messages.title)}>
      <FaCheck />
    </Badge>
  );
};

export default VerifiedBadge;
