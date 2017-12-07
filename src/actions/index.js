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
        .then(user => signUpUserSuccess(dispatch, user, name, email))
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
  return(dispatch) => {
    const user = firebase.auth().currentUser;

    firebase.database().ref(`/users/${user.uid}/profile`)
    .update({
      firstName: firstName,
      lastName: lastName,
      city: city,
      stateProvince: stateProvince,
      zipPostalCode: zipPostalCode,
      topSkills: topSkills,
      describeYourself: describeYourself,
      resume: resume
    }).then(error =>{
      if(!error){
        firebase.storage().ref(`User Resumes/${user.uid}/${user.displayName} Resume`).put(resume)
          .then(snapshot => {
            const data = snapshot;
            firebase.database().ref(`/users/${user.uid}/profile`).update({resume: data.downloadURL})
              .then(error => {
                if(!error)
                  dispatch({type: types.UPDATE_PROFILE_SUCCESS})
                else
                  console.log(error)
              })
            })
          }
      else {
        console.log(error);
      }
    });
  }
}

export const getProfileInfo = () => {
  return(dispatch) => {
    const user = firebase.auth().currentUser;

    const profileData = firebase.database().ref(`/users/${user.uid}/profile`);
        profileData.once("value")
        .then(snapshot => {
          const data = snapshot.val();
          dispatch({ type: types.GET_PROFILE_SUCCESS, payload: data })
          if(data.resume)
            getResumeURL(dispatch, user);
        })
        .catch(error => console.log(error));
    }
}

export const getResumeURL = (dispatch, user) => {

    const storageRef = firebase.storage().ref(`User Resumes/${user.uid}/${user.displayName} Resume`)
    storageRef.getDownloadURL().then(url => dispatch({ type: types.GET_RESUME_SUCCESS, payload: url }) );
}

const signUpUserSuccess = (dispatch, user, name, email) => {
  user.updateProfile({ displayName: name })
    .then(() => {
      createData(user, name, email);
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

const createData = (user, name, email) => {
  firebase.database().ref(`/users/${user.uid}/profile`)
  .set({
    username: name,
    email: email,
    firstName: '',
    lastName: '',
    city: '',
    stateProvince: '',
    zipPostalCode: '',
    topSkills: '',
    describeYourself: '',
    resume: '',
  })
}
