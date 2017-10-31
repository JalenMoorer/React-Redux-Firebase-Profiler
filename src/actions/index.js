import firebase from 'firebase';
import * as types from './types';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  }
}

export const createUser = ({ name, email, password }) => {
    return(dispatch) => {
      dispatch({ type: types.LOGIN_USER });

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => signUpUserSuccess(dispatch, user, name))
        .catch(() => loginUserFail(dispatch));
    }
}

const signUpUserSuccess = (dispatch, user, name) => {
  user.updateProfile({ displayName: name })
    .then(() => loginUserSuccess(dispatch, user))
    .catch(error => console.log(error));
};

const loginUserSuccess = (dispatch, user) => {
  console.log(user);
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: types.LOGIN_USER_FAIL});
};
