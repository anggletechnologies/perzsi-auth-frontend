import { logOut } from "src/services/auth"
import genRoute from "./genRoute"



export default (error)=>{
  if (error.response) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    console.error(error)
    if(error.response.status === 401){
      logOut()
      window.location.href = genRoute.login.create()
    }
  }else{
    console.error(error)
  }
}
