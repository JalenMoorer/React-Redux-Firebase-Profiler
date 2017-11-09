import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGIN_GET_USER
} from  '../actions/types';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: ''
};

export default(state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case LOGIN_USER:
      return {...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return {...state,  ...INITIAL_STATE, user: action.payload,  };
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed.', loading: false};
    case LOGIN_GET_USER:
      return {...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
}
