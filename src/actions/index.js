import firebase from 'firebase';
import * from './types';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  }
}

export const createUser = ({ name, email, password }) => {
    return(dispatch) => {
      dispatch({ type: LOGIN_NEW_USER });

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
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUseFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL});
};
