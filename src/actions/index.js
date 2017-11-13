import firebase from 'firebase';
import history from '../components/routes/History';
import * as types from './types';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  }
}

export const logoutUser = () => {
  return(dispatch) => {
    firebase.auth().signOut().then(() => logoutUserSuccess(dispatch));
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

export const getUserSuccess = (user) => {
  return {
    type: types.LOGIN_GET_USER,
    payload: user
  }
};

export const updateProfile = ({firstName,lastName,email,city,stateProvince,zipPostalCode,topSkills,describeYourself,resume}) => {
  console.log('update profile called');
  return(dispatch) => {
    const user = firebase.auth().currentUser;

    firebase.database().ref(`/users/${user.uid}/profile`)
    .update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      city: city,
      stateProvince: stateProvince,
      zipPostalCode: zipPostalCode,
      topSkills: topSkills,
      describeYourself: describeYourself,
      resume: resume
    }).then(error =>{
      if(!error){
        firebase.storage().ref(`User Resumes/${user.uid}/${user.displayName} Resume`).put(resume)
          .then(snapshot => dispatch({type: types.UPDATE_PROFILE_SUCCESS}))
      }
      else {
        console.log('error');
      }
    });
  }
}

const signUpUserSuccess = (dispatch, user, name) => {
  user.updateProfile({ displayName: name })
    .then(() => {
      createData(user);
      loginUserSuccess(dispatch, user)
    })
    .catch(error => console.log(error));
};

const loginUserSuccess = (dispatch, user) => {
  console.log(user);
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });

  history.push('/dashboard');
};

const logoutUserSuccess = (dispatch) => {
  dispatch({ type: types.LOGOUT_USER});
}

const loginUserFail = (dispatch) => {
  dispatch({ type: types.LOGIN_USER_FAIL});
};

const createData = (user) => {
  firebase.database().ref(`/users/${user.uid}/profile`)
  .set({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    stateProvince: '',
    zipPostalCode: '',
    topSkills: '',
    describeYourself: '',
    resume: ''
  })
}
