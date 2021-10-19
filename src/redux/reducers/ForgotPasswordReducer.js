import {
    forgotPassword,
    forgotPasswordSuccessfull,
    forgotPasswordFailed
} from '../actions/ForgotPasswordActions.js'

const initialState = {
    error: null,
    message: null,
    loading: false,
}

const ForgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case forgotPassword:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case forgotPasswordSuccessfull:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case forgotPasswordFailed:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ForgotPasswordReducer;