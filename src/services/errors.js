import { defineMessage } from 'react-intl';

const messages = {
  NOT_FOUND: {
    id: 'app.errors.NOT_FOUND',
    defaultMessage: 'Sorry can\'t find that!'
  },
  NOT_FOUND_OR_WRONG_PWD: {
    id: 'app.errors.NOT_FOUND_OR_WRONG_PWD',
    defaultMessage: 'The username or password is incorrect.'
  },
  WRONG_AUTHORIZATION_TYPE: {
    id: 'app.errors.WRONG_AUTHORIZATION_TYPE',
    defaultMessage: 'Authorization type wrong!'
  },
  INVALID_AUTHORIZATION: {
    id: 'app.errors.INVALID_AUTHORIZATION',
    defaultMessage: 'Invalid authorization!'
  },
  INVALID_USER: {
    id: 'app.errors.INVALID_USER',
    defaultMessage: 'Invalid user account!'
  },
  ACCESS_DENIED: {
    id: 'app.errors.ACCESS_DENIED',
    defaultMessage: 'Access denied!'
  },
  AUTHORIZATION_REQUIRED: {
    id: 'app.errors.AUTHORIZATION_REQUIRED',
    defaultMessage: 'Authorization required!'
  },
  SESSION_EXPIRED: {
    id: 'app.errors.SESSION_EXPIRED',
    defaultMessage: 'Session expired!'
  },
  UNKNOWN_ERROR: {
    id: 'app.errors.UNKNOWN_ERROR',
    defaultMessage: 'Sorry, something went wrong. Try again later!'
  },
  DUPLICATE_ITEM: {
    id: 'app.errors.DUPLICATE_ITEM',
    defaultMessage: 'Item exists! Try again!'
  },
  IMAGE_VERY_LARGE: {
    id: 'app.errors.IMAGE_VERY_LARGE',
    defaultMessage: 'Image size must be less than 2mb.'
  },
  INVALID_REQUEST: {
    id: 'app.errors.INVALID_REQUEST',
    defaultMessage: 'Invalid request!'
  },
  INVALID_VERIFICATION_CODE: {
    id: 'app.errors.INVALID_VERIFICATION_CODE',
    defaultMessage: 'Invalid verification code!'
  },
  INVALID_RESET_PASSWORD_CODE: {
    id: 'app.errors.INVALID_RESET_PASSWORD_CODE',
    defaultMessage: 'Reset password token is invalid'
  },
};

export const errorMessage = (code) => defineMessage(messages)[code];
