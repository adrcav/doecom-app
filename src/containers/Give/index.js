import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';
import useAxios from 'axios-hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { SafeAlert } from './styles';

import { LoadingSpinner, InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import CauseInfo from '../../components/CauseInfo';
import Input from '../../components/Input';
import Label from '../../components/Label';
import FormButton from '../../components/FormButton';
import FormRadioCard from '../../components/FormRadioCard';
import Title from '../../components/Title';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';

const Give = ({ match }) => {
  const intl = useIntl();
  const { id } = match.params;
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const [{ loading }, giveAmount] = useAxios({
    url: `/causes/${id}/donation`,
    method: 'POST'
  }, { manual: true });

  const [{ loading: loadingCause, data: cause }] = useAxios({
    url: `/causes/${id}`
  });

  const paymentMethods = [
    {
      text: intl.formatMessage(messages.methods.boleto),
      value: 'boleto',
      icon: 'FaBarcode',
    },
    {
      text: intl.formatMessage(messages.methods.creditCard),
      value: 'credit_card',
      icon: 'FaRegCreditCard',
    },
  ];

  const handleGive = async (values) => {
    try {
      const { data } = await giveAmount({ data: values });
      if (data.error) throw data.error.code;
      handleDonationClick(cause.paymentUrl);
      history.push('/give/success');
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error)));
    }
  };

  const handleDonationClick = (url) => {
    const element = document.createElement('a');
    element.href = url;
    element.target = '_blank';
    element.click();
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      {loadingCause && (
        <div className="row justify-content-center">
          <LoadingSpinner />
        </div>
      )}

      {cause && (
        <div className="row">
          <div className="col-12">
            <CauseInfo data={cause} />

            <p style={{
              textAlign: 'right',
              color: '#999',
              fontStyle: 'italic',
              fontSize: '.9rem',
              margin: 0
            }}>(*) <FormattedMessage {...messages.fieldRequired} /></p>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit(handleGive)}>
              {!auth.isAuthenticated() && (
                <div className="form-group">
                  <Input
                  label={`${intl.formatMessage(messages.emailLabel)} *`}
                    type="email"
                    name="email"
                    icon="FaEnvelope"
                    className="form-control"
                    placeholder={intl.formatMessage(messages.emailDescription)}
                    ref={register({ required: !auth.isAuthenticated() })}
                    error={errors.email}
                  />
                  {errors.email && (
                    <InputError>
                      <FormattedMessage {...messages.emailIsRequired} />
                    </InputError>
                  )}
                </div>
              )}

              <div className="form-group">
                <Input
                  label={`${intl.formatMessage(messages.amountLabel)} *`}
                  type="tel"
                  inputMode="number"
                  name="amount"
                  icon="FaDollarSign"
                  className="form-control"
                  placeholder={intl.formatMessage(messages.amountDescription)}
                  /*maskType="currency"
                  pattern="*"*/
                  ref={register({ required: true })}
                  error={errors.amount}
                />
                {errors.amount && (
                  <InputError>
                    <FormattedMessage {...messages.amountIsRequired} />
                  </InputError>
                )}
              </div>

              <div className="row">
                <div className="col-12">
                  <Label
                    value={`${intl.formatMessage(messages.methodLabel)} *`}
                    error={errors.paymentMethod}
                  />
                </div>
                {paymentMethods.map(method => (
                  <div key={method.value} className="col-6">
                    <FormRadioCard
                      name="paymentMethod"
                      text={method.text}
                      value={method.value}
                      icon={method.icon}
                      ref={register({ required: true })}
                    />
                  </div>
                ))}
                {errors.paymentMethod && (
                  <div className="col-12">
                    <InputError>
                      <FormattedMessage {...messages.methodIsRequired} />
                    </InputError>
                  </div>
                )}
              </div>

              <hr/>

              <SafeAlert>
                <p>
                  <FormattedMessage {...messages.info.message} />
                </p>
              </SafeAlert>

              <SafeAlert style={{ marginTop: '10px', marginBottom: '15px' }}>
                <div className="icon">
                  <FontAwesome.FaLock />
                </div>
                <p>
                  <strong>
                    <FormattedMessage {...messages.info.security} />
                  </strong>
                </p>
              </SafeAlert>

              <FormButton
                type="submit"
                theme="primary"
                value={intl.formatMessage(messages.buttonSubmit)}
                loading={loading}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Give;
