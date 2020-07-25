import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

import { states as dataStates } from '../../util/data';

export const Register = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [{ account }] = useStateValue();

  const states = dataStates.map(state => ({ value: state.uf, text: state.name }));

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success(intl.formatMessage(messages.alerts.updated));
  };

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />
      <p style={{
        textAlign: 'right',
        color: '#999',
        fontStyle: 'italic',
        fontSize: '.9rem',
        margin: '-10px 0 10px'
      }}>(*) <FormattedMessage {...messages.fieldRequired} /></p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.nameLabel)} *`}
                type="text"
                name="name"
                className="form-control"
                placeholder={intl.formatMessage(messages.nameDescription)}
                defaultValue={account.name}
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.emailLabel)} *`}
                type="email"
                name="email"
                className="form-control"
                placeholder={intl.formatMessage(messages.emailDescription)}
                defaultValue={account.email}
                required={true}
              />
            </div>

            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.stateLabel)} *`}
                    name="state"
                    className="form-control"
                    placeholderValue={intl.formatMessage(messages.stateDescription)}
                    options={states}
                    defaultValue={account.state}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <Input
                    label={`${intl.formatMessage(messages.cityLabel)} *`}
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder={intl.formatMessage(messages.nameDescription)}
                    defaultValue={account.city}
                    required={true}
                  />
                </div>
              </div>
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.buttonSubmit)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
