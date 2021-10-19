import {
    CheckSignIn,
    SigninSuccessful,
    SigninFailed
} from '../actions/SignInActions'

const initialState = {
    message: null,
    loading: false,
}

const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case CheckSignIn:
            return {
                ...state,
                loading: true,
            }
        case SigninSuccessful:
            return {
                ...state,
                loading: false,
            }
        case SigninFailed:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;    
    }
}

export default SignInReducer;