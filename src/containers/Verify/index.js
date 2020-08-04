import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import { BsCheckCircle } from 'react-icons/bs';

import { Container } from './styles';
import FormButton from '../../components/FormButton';

import { errorMessage } from '../../services/errors';

const Verify = ({ location }) => {
  const intl = useIntl();
  const history = useHistory();
  const [verified, setVerified] = useState(false);

  const [{ loading }, verify] = useAxios({
    url: '/account/verify',
    method: 'POST'
  }, {
    manual: true
  });

  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  useEffect(() => {
    (async function() {
      try {
        const body = { token };
        const { data } = await verify({ data: body });
        if (data && data.error) throw data.error;
        setVerified(true);
      } catch (error) {
        toast.error(intl.formatMessage(errorMessage(error.code)));
      }
    })();
  }, [token, verify, intl]);

  return (
    <div className="container">
      <Container>
        {loading ? (
          <>
            <div className="loading-icon">
              <div className="spinner"></div>
            </div>
            <p>
              <FormattedMessage {...messages.verifyLoading} />
            </p>
          </>
        ) : (
          <>
            {verified ? (
              <div className="verify-success">
                <div className="verify-success-icon">
                  <BsCheckCircle />
                </div>
                <p>
                  <strong>
                    <FormattedMessage {...messages.verified} />
                  </strong>
                </p>
              </div>
            ) : (
              <p>
                <FormattedMessage {...messages.errorOcurred} />
              </p>
            )}

            <br />

            <FormButton
              type="button"
              theme="primary"
              value={intl.formatMessage(messages.loginButton)}
              onClick={() => history.push('/login')}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export default Verify;
