import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { TermsCard } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

import { termsOfUse } from '../../util/terms';

const RegisterTerms = ({ onClick }) => {
  const intl = useIntl();

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.terms.title)} />

      <p>
        <FormattedMessage {...messages.terms.description} />
      </p>

      <TermsCard className="mb-4">
        <div dangerouslySetInnerHTML={{ __html: termsOfUse }}></div>
      </TermsCard>

      <FormButton
        type="button"
        theme="primary"
        value={intl.formatMessage(messages.terms.buttonSubmit)}
        onClick={onClick}
      />
    </div>
  );
};

export default RegisterTerms;
