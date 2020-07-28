import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

import { states as dataStates } from '../../util/data';

export const CauseRegister = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const states = dataStates.map(state => ({ value: state.uf, text: state.name }));

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push('/register/success');
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
      }}>(*) <FormattedMessage {...messages.form.fieldRequired} /></p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.nameLabel)} *`}
                type="text"
                name="name"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.nameDescription)}
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.pictureLabel)} *`}
                type="url"
                name="picture"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.pictureDescription)}
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.resumeLabel)} *`}
                type="text"
                name="resume"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.resumeDescription)}
                required={true}
              />
            </div>

            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.form.stateLabel)} *`}
                    name="state"
                    className="form-control"
                    placeholderValue={intl.formatMessage(messages.form.stateDescription)}
                    options={states}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <Input
                    label={`${intl.formatMessage(messages.form.cityLabel)} *`}
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder={intl.formatMessage(messages.form.cityDescription)}
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.urlDonationLabel)} *`}
                type="url"
                name="urlDonation"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.urlDonationDescription)}
                required={true}
              />
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.form.buttonSubmit)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CauseRegister;
