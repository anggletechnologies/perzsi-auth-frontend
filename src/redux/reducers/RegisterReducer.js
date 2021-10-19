 import {
    registerUser,
    registerUserSuccessful,
    registerUserFailed
} from '../actions/RegisterActions'

const initialState = {
    user: null,
    error: null,
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerUser:
            return {
                ...state,
            }
        case registerUserSuccessful:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case registerUserFailed:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default RegisterReducer;