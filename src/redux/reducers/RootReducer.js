import { combineReducers } from 'redux'
import ForgotPasswordReducer from './ForgotPasswordReducer'
import NotificationReducer from './NotificationReducer'
import RegisterReducer from './RegisterReducer'
import SignInReducer from './SignInReducer'

const RootReducer = combineReducers({
    notifications: NotificationReducer,
    register: RegisterReducer,
    signin: SignInReducer,
    forgotpassword: ForgotPasswordReducer,
})

export default RootReducer