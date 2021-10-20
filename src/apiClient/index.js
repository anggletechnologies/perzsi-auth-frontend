import axios from 'axios';
import { useSelector } from 'react-redux';
import Auth from './authentication';
import User from './user';





class Client{
    constructor(user){
        this.source = axios.CancelToken.source();
    
        let headers;
    
        
    
        headers = {
          "Content-Type": "application/json"
        }
        
    
      this.axios = axios.create({
        // baseURL: 'https://some-domain.com/api/',
        timeout: 30000,
        headers,
        cancelToken: this.source.token
      });
    
    
      this.Auth = new Auth(this.axios)
      this.User = new User(this.axios)
      
 
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