// import * as Actions from './constants';

/*export function signInWithEmail({username, password}) {
    return {
      type: Actions.SIGN_IN_WITH_EMAIL,
      username,
      password,
    };
  } */
  import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    PASSWORD_CHANGED_SUCCESS,
    PASSWORD_CHANGED_FAIL
  } from "./constants";
  
  import AuthService from "./auth.service";
  
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        // console.log(data)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        console.log(error)
        /*const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString(); */
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        return Promise.reject();
      }
    );
  };

  export const updatePassword = (oldPassword, newPassword) => (dispatch) => {
    return AuthService.updatePassword(oldPassword, newPassword).then(
      (data) => {
        console.log(data)
        dispatch({
          type: PASSWORD_CHANGED_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      (error) => {
        console.log(error)
        dispatch({
          type: PASSWORD_CHANGED_FAIL,
        });
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };