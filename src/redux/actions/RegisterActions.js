import axios from 'axios';

import  {
    REGISTER_USER,
    REGISTER_USER_SUCCESSFUL,
    REGISTER_USER_FAILED
} from '../Constants'


export const registerUser = (user) => (dispatch) => {
    dispatch({
        type: REGISTER_USER,
        payload: user
    })
}

export const registerUserSuccessful = (user) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_SUCCESSFUL,
        payload: user
    })
}

export const registerUserFailed = (error) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_FAILED,
        payload: error
    })
}