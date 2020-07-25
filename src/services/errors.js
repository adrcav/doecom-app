const messages = {
  NOT_FOUND_OR_WRONG_PWD: 'Usuário ou senha incorretos!',
  UNKNOWN_ERROR: 'Ops, tivemos um problema! Por favor, tente novamente em instantes.'
};

export const errorMessage = (code) => messages[code];
