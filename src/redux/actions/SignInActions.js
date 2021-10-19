import axios from 'axios';

import {
    CHECK_SIGN_IN,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_FAILED,
} from '../Constants';

export const CheckSignIn = (user, error) => (dispatch) => {
    dispatch({
        type: CHECK_SIGN_IN,
    })
}

export const SigninSuccessful = (user) => (dispatch) => {
    dispatch({
        type: SIGN_IN_SUCCESSFUL,
        payload: user
    })
}

export const SigninFailed = (error) => (dispatch) => {
    dispatch({
        type: SIGN_IN_FAILED,
        payload: error
    })
}