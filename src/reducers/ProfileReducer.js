import {
UPDATE_PROFILE_SUCCESS,
GET_PROFILE_SUCCESS,
GET_RESUME_SUCCESS
} from  '../actions/types';

const INITIAL_STATE = {
 error: ''
};

export default(state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case UPDATE_PROFILE_SUCCESS:
      console.log('update successful');
      return {...state };
    case GET_PROFILE_SUCCESS:
      return {...state, profileData: action.payload };
    case GET_RESUME_SUCCESS:
      return {...state, resumeURL: action.payload };
    default:
      return state;
  }
}
