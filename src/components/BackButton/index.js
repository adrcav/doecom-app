import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import messages from './messages';

const BackButton = ({ value = null, url = null }) => {
  const intl = useIntl();
  const history = useHistory();

  if (!value) {
    value = intl.formatMessage(messages.back);
  }

  const handleRedirect = () => url ? history.push(url) : history.goBack();

  return (
    <div className="d-flex justify-content-start">
      <div
        className="d-flex align-items-center"
        style={{ cursor: 'pointer', marginBottom: '20px' }}
        onClick={handleRedirect}
      >
        <FaArrowCircleLeft style={{ marginRight: '5px' }} />
        <p style={{ margin: 0, fontWeight: '500' }}>{value}</p>
      </div>
    </div>
  );
};

export default BackButton;
