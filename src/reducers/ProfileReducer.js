import {
UPDATE_PROFILE_SUCCESS
} from  '../actions/types';

const INITIAL_STATE = {
 error: ''
};

export default(state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case UPDATE_PROFILE_SUCCESS:
      console.log('update successful');
      return {...state };
    default:
      return state;
  }
}
