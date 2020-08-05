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
  myCauses: null
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
    default:
      return state;
  }
};
