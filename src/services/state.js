import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const initialState = {
  account: {},
  myCauses: null,
  locale: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'updateAccount':
      return {
        ...state,
        account: action.value
      };
    case 'updateMyCauses':
      return {
        ...state,
        myCauses: action.value
      };
    case 'updateLocale':
      return {
        ...state,
        locale: action.value
      };
    default:
      return state;
  }
};
