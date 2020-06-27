import {
    REGISTER_OK,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    AUTH_STATUS,
    AUTH_STATUS_ERROR,
    LOGOUT
} from './actionTypes';
import clientAxios from '../../../config/axios';
import AuthToken from '../../../config/token';

/**
 * Register User
 * @param {*} params 
 */
export function registerUser(params) {

    return async (dispatch) => {
        await clientAxios.post('/api/users', params).then(response => {
            dispatch({
                type: REGISTER_OK,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
            dispatch({
                type: REGISTER_FAIL,
                payload: 'An ocurred error'
            })
        });
    }

}

/**
 * Login User
 * @param {*} params 
 */
export function loginUser(params) {
    return async (dispatch) => {
        await clientAxios.post('/api/auth', params).then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            return null;
        }).catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            });
        });
    }
}

/**
 * Get user authenticated
 */
export function getUserAuth() {

    let token = localStorage.getItem('token');

    //add token to headers
    if (token) {
        AuthToken(token);
    }

    return async (dispatch) => {
        await clientAxios.get('/api/users').then(response => {
            dispatch({
                type: AUTH_STATUS,
                payload: response.data.user
            });
        }).catch(error => {
            dispatch({
                type: AUTH_STATUS_ERROR,
                payload: error.response.data.msg
            });
        });
    }
}

/**
 * Logout
 */
export const logout = () => {
    return {
        type: LOGOUT
    }
}