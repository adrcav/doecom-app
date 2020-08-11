import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { RateExperience } from './styles';

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

const GiveRate = ({ match }) => {
  const intl = useIntl();
  const { id } = match.params;
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const [{ loading }, rateDonation] = useAxios({
    url: `/donations/${id}/rate`,
    method: 'POST'
  }, { manual: true });

  const [{ loading: loadingDonation, data: donation }] = useAxios({
    url: `/donations/${id}`
  });

  const confirmedDonation = [
    {
      text: intl.formatMessage(messages.confirmedDonation.yes),
      value: true,
      icon: 'FaRegThumbsUp'
    },
    {
      text: intl.formatMessage(messages.confirmedDonation.not),
      value: false,
      icon: 'FaRegThumbsDown'
    }
  ];

  const experience = [
    {
      text: intl.formatMessage(messages.experience.terrible),
      value: '1',
      icon: 'FaSadCry',
      emoji: '😡'
    },
    {
      text: intl.formatMessage(messages.experience.bad),
      value: '2',
      icon: 'FaSadTear',
      emoji: '🙁'
    },
    {
      text: intl.formatMessage(messages.experience.regular),
      value: '3',
      icon: 'FaMeh',
      emoji: '🙂'
    },
    {
      text: intl.formatMessage(messages.experience.good),
      value: '4',
      icon: 'FaSmileBeam',
      emoji: '😄'
    },
    {
      text: intl.formatMessage(messages.experience.great),
      value: '5',
      icon: 'FaGrinStars',
      emoji: '😍'
    },
  ];

  const handleGive = async (values) => {
    try {
      const { data } = await rateDonation({ data: values });
      if (data.error) throw data.error;
      toast.success('Avaliação enviada com sucesso! Agradecemos a sua colaboração.');
      history.push('/');
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      {loadingDonation && (
        <div className="row justify-content-center">
          <LoadingSpinner />
        </div>
      )}

      {donation && (
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <CauseInfo data={donation.cause} />

            <p style={{
              textAlign: 'center',
              color: '#999',
              fontStyle: 'italic',
              fontSize: '.9rem',
              margin: 0
            }}>{intl.formatMessage(messages.donationDate).replace('%DONATION_DATE%', moment(donation.createdAt).format('DD/MM/YYYY')).replace('%DONATION_TIME%', moment(donation.createdAt).format('HH:mm'))}</p>

            <form onSubmit={handleSubmit(handleGive)} className="mt-4">
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
                <Label
                  value={`${intl.formatMessage(messages.confirmedDonationLabel)} *`}
                  error={errors.confirmed}
                />
                <div className="row">
                  {confirmedDonation.map(method => (
                    <div key={method.value} className="col-6">
                      <FormRadioCard
                        name="confirmed"
                        text={method.text}
                        value={method.value}
                        icon={method.icon}
                        ref={register({ required: true })}
                      />
                    </div>
                  ))}
                </div>
                {errors.confirmed && (
                  <InputError>
                    <FormattedMessage {...messages.confirmedDonationIsRequired} />
                  </InputError>
                )}
              </div>

              <div className="form-group">
                <Label
                  value={`${intl.formatMessage(messages.experienceLabel)} *`}
                  error={errors.experience}
                />
                <div className="row">
                  <RateExperience>
                    {experience.map(method => (
                      <div key={method.value} className="RateExperience__option">
                        <FormRadioCard
                          name="experience"
                          text={method.text}
                          value={method.value}
                          emoji={method.emoji}
                          ref={register({ required: true })}
                        />
                      </div>
                    ))}
                  </RateExperience>
                </div>
                {errors.experience && (
                  <InputError>
                    <FormattedMessage {...messages.experienceIsRequired} />
                  </InputError>
                )}
              </div>

              <hr/>

              <FormButton
                type="submit"
                theme="secondary"
                value={intl.formatMessage(messages.buttonSubmit)}
                loading={loading}
                disabled={donation.feedback && donation.feedback.experience}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiveRate;
