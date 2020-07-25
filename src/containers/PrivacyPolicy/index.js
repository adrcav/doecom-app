import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

import { TermsContainer } from './styles';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import PrototypeAlert from '../../components/PrototypeAlert';

import { privacyPolicy } from '../../util/terms';

export const PrivacyPolicy = () => {
  const intl = useIntl();

  return (
    <div className="container">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      <PrototypeAlert />

      <TermsContainer
        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
      ></TermsContainer>
    </div>
  );
};

export default PrivacyPolicy;
