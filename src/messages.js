import { defineMessage } from 'react-intl';

const messages = {
  notifications: {
    confirmEmail: {
      title: {
        id: 'app.notifications.confirmEmail.title',
        defaultMessage: '✉️ Verify your email'
      },
      description: {
        id: 'app.notifications.confirmEmail.description',
        defaultMessage: 'Please confirm that <strong>%ACCOUNT_EMAIL%</strong> is your email address to activate your account.'
      },
      button: {
        id: 'app.notifications.confirmEmail.button',
        defaultMessage: 'Resend email'
      },
      success: {
        id: 'app.notifications.confirmEmail.button.success',
        defaultMessage: 'Verification email sent!'
      },
    },
  },
};

export default defineMessage(messages);
