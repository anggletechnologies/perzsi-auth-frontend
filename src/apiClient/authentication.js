

/**
 * @typedef CroimoSuccessResponse
 * @property {"success"} status
 * @property {Sting} message
 * @property {Object} data
 * 
 */

/**
 * @typedef CroimoErrorResponse
 * @property {"failed"} status
 * @property {Sting} message
 * @property {Object} data
 * 
 */


class Auth{
    constructor(axios){
        this.axios = axios
        this.baseUrl = "/account/api/auth"
    }
    

    /**
     * 
     * @param {Object} args
     * @param {Object} args.data
     * @param {Object} args.params
     * @param {String} args.data.username
     * @param {String} args.data.email
     * @param {String} args.data.password
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async register({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+"/register/",
        method:'post',
        data,
        params
        })

        return res.data
    }


    /**
     * 
     * @param {Object} args
     * @param {Object} args.data
     * @param {Object} args.params
     * @param {String} args.params.next
     * @param {String} args.data.email
     * @returns {Promise<CroimoSuccessResponse>}
     */
     async resendOTP({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+"/resend-otp/",
        method:'post',
        data,
        params
        })

        return res.data
    }

    /**
     * 
     * @param {Object} args
     * @param {Object} args.data
     * @param {Object} args.params
     * @param {String} args.data.email
     * @param {String} args.data.otp
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async verifyEmail({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+"/verify-email/",
        method:'post',
        data,
        params
        })

        return res.data
    }

    /**
     * 
     * @param {Object} args
     * @param {Object} args.params
     * @param {Object} args.data
     * @param {String} args.data.email
     * @param {String} args.data.password
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async login({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+"/login/",
        method:'post',
        data,
        params
        })

        return res.data
    }


    

    /**
     * 
     * @param {Object} args
     * @param {Object} args.params
     * @param {Object} args.data
     * @param {String} args.data.email
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async resetPassword({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+"/reset-password/",
        method:'post',
        data,
        params
        })

        return res.data
    }

   

    /**
     * @param {Object} args
     * @param {Object} args.params
     * @param {Object} args.data
     * @param {String} args.data.password
     * @param {String} args.data.token
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async newPassword({data,params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+`/new-password/`,
        method:'post',
        data,
        params
        })

        return res.data
    }


    /**
     * @param {Object} args
     * @param {Object} args.params
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async logout({params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+`/logout/`,
        method:'post',
        params
        })

        return res.data
    }


    /**
     * 
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async refreshToken(){
        
        const res = await  this.axios({
        url:this.baseUrl+`/refresh-token/`,
        method:'post'
        })

        return res.data
    }


    /**
     * @param {Object} args
     * @param {Object} args.params
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async verifyToken({params={}}={}){
        const res = await  this.axios({
        url:this.baseUrl+`/verify-token/`,
        method:'post',
        params
        })

        return res.data
    }

    
}




export default Auth