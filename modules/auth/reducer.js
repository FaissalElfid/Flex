/*import {fromJS} from 'immutable';

import { errorInit as initError} from './config';


export default function authReducer(state = initState, action = {}) {
    switch (action.type) {
        case Actions.SIGN_IN_WITH_EMAIL:
            return state.set('pending', true).set('loginError', fromJS(initError));
    }
}
*/
// the reducers add a new state to the state objects
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "./constants";
  import AsyncStorage from '@react-native-community/async-storage';
  
  //const user = JSON.parse(AsyncStorage.getItem("user"));
  const user = AsyncStorage.getItem("user");
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }