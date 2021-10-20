import {toQueryString} from './navigations'

const genLink = {
  // auth
  register:(object)=>`/auth/register/`+toQueryString(object),
  logout:(object)=>`/auth/logout/`+toQueryString(object),
  login:(object)=>`/auth/login/`+toQueryString(object),
  resetPassword:(object)=>`/auth/reset-password/`+toQueryString(object),
  newPassword:(object)=>`/auth/new-password/`+toQueryString(object),
  confirmEmail:(object)=>`/auth/confirm-email/`+toQueryString(object),
  emailSentConfirm:(object)=>`/auth/email-sent-confirm/`+toQueryString(object),
  home:(object)=>`/`+toQueryString(object),
  
}


export default genLink