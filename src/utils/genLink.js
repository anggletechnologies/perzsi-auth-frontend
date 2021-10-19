import {toQueryString} from './navigations'

const genLink = {
  // auth
  register:(object)=>`/register/`+toQueryString(object),
  emailConfirmation:(object)=>`/email-confirmation/`+toQueryString(object),
  emailVerification:(object)=>`/email-verification/`+toQueryString(object),
  signin:(object)=>`/login/`+toQueryString(object),
  forgotPassword:(object)=>`/forgotpassword/`+toQueryString(object),
  resetPassword:(object)=>`/resetPassword/`+toQueryString(object),
  resetLinkSuccess:(object)=>`/resetlinksuccess/`+toQueryString(object),
  resetPasswordSuccess:(object)=>`/resetpasseordsuccess/`+toQueryString(object),
  home:(object)=>`/`+toQueryString(object),
  dashboard:(object)=>`/dashboard/`+toQueryString(object),
  wallet:(object)=>`/dashboard/wallets/`+toQueryString(object),
  transactions:(object)=>`/dashboard/transactions/`+toQueryString(object),
  settings:(object)=>`/dashboard/settings/`+toQueryString(object),
  card:(object)=>`/dashboard/cards/`+toQueryString(object),
  convert:(object)=>`/dashboard/convert/`+toQueryString(object),
  logout:(object)=>`/dashboard/logout/`+toQueryString(object),
  kyc:(object)=>`/kyc/`+toQueryString(object)
}


export default genLink