import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer.js';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  // This GithubState is going to include all of our actions
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    // Make alert dissapear after 2 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
