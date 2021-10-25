import {toQueryString} from './navigations'

const genLink = {
  // auth
  register:(object)=>`/account/auth/register/`+toQueryString(object),
  logout:(object)=>`/account/auth/logout/`+toQueryString(object),
  login:(object)=>`/account/auth/login/`+toQueryString(object),
  resetPassword:(object)=>`/account/auth/reset-password/`+toQueryString(object),
  newPassword:(object)=>`/account/auth/new-password/`+toQueryString(object),
  confirmEmail:(object)=>`/account/auth/confirm-email/`+toQueryString(object),
  emailSentConfirm:(object)=>`/account/auth/email-sent-confirm/`+toQueryString(object),
  home:(object)=>`/`+toQueryString(object),
  
}


export default genLink