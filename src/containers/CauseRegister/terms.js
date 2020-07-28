import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { TermsCard } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

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
        <p>Este Termo de Uso apresenta as “Condições Gerais” aplicáveis ao uso dos serviços oferecidos por DOECOM DOAÇÕES, pessoa jurídica fictícia, doravante denominada Doecom, através do site www.doecom.netlify.app.</p>
        <p>Qualquer pessoa, doravante denominada “PARTICIPANTE”, que pretenda utilizar qualquer serviço ou informação do Doecom deverá aceitar este Termo de Uso, e todas as demais políticas incorporados ao mesmo por referência e princípios que o regem.</p>
        <p>A ACEITAÇÃO DO TERMO DE USO É ABSOLUTAMENTE INDISPENSÁVEL À UTILIZAÇÃO DA PLATAFORMA E SEUS SERVIÇOS, SEJA COMO ASINANTE OU NÃO ASSINANTE.</p>
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
