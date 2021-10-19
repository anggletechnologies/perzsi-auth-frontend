import axios from 'axios';
import { useSelector } from 'react-redux';
import Auth from './authentication';
import Bank from './bank';
import Beneficiary from './beneficiary'
import Card from './card';
import Deposit from './deposit';
import Exchange from './exchange';
import Notificaton from './notification';
import Transfer from './transfer';
import User from './user';
import Wallet from './wallet';
import Withdrawal from './withdrawal';
import Utils from './utils';





class Client{
    constructor(user){
        this.source = axios.CancelToken.source();
    
        let headers;
    
        const token = user.token
    
        if(token){
          headers = {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
          }
        }else{
          headers = {
            "Content-Type": "application/json"
          }
        }
    
      this.axios = axios.create({
        // baseURL: 'https://some-domain.com/api/',
        timeout: 30000,
        headers,
        cancelToken: this.source.token
      });
    
    
      this.Auth = new Auth(this.axios)
      this.Bank = new Bank(this.axios)
      this.Beneficiary = new Beneficiary(this.axios)
      this.Card = new Card(this.axios)
      this.Deposit = new Deposit(this.axios)
      this.Exchange = new Exchange(this.axios)
      this.Notificaton = new Notificaton(this.axios)
      this.Transfer = new Transfer(this.axios)
      this.User = new User(this.axios)
      this.Wallet = new Wallet(this.axios)
      this.Withdrawal = new Withdrawal(this.axios)
      this.Utils = new Utils(this.axios)
 
      }
    
    
      abort(message="request has been cancel"){
        this?.source?.cancel(message)
      }
}


const useSdk = () =>{
  const user = useSelector(state=>state.user)
  return new Client(user)
}

export default useSdk