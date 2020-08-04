import React from 'react';
import { useIntl } from 'react-intl';
import messages from './messages';

import { TermsContainer } from './styles';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';

import { termsOfUse } from '../../util/terms';

export const TermsOfUse = () => {
  const intl = useIntl();

  return (
    <div className="container">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      <TermsContainer
        dangerouslySetInnerHTML={{ __html: termsOfUse }}
      ></TermsContainer>
    </div>
  );
};

export default TermsOfUse;
