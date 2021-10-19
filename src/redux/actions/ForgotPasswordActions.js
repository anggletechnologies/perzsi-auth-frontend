import axios from 'axios';

import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESSFULL,
    FORGOT_PASSWORD_FAILED
} from '../Constants'

export const forgotPassword = (user) => (dispatch) => {
    dispatch({
        type: FORGOT_PASSWORD,
        payload: user
    })
}

export const forgotPasswordSuccessfull = (message) => (dispatch) => {
    dispatch({ 
        type: FORGOT_PASSWORD_SUCCESSFULL,
        payload: message
    })
}

export const forgotPasswordFailed = (error) => (dispatch) => {
    dispatch({
        type: FORGOT_PASSWORD_FAILED,
        payload: error
    })
}