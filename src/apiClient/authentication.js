

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
        this.baseUrl = "/api/auth"
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
    async register(args){
        const {data,params={}} = args
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
     async resendOTP(args){
        const {data,params={}} = args
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
    async verifyEmail(args){
        const {data,params={}} = args
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
    async login(args){
        const {data,params} = args
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
    async resetPassword(args){
        const {data,params={}} = args
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
    async newPassword(args){
        const {data,params={}} = args
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
    async logout(args){
        const {params={}} = args
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
    async verifyToken(args){
        const {params={}} = args
        const res = await  this.axios({
        url:this.baseUrl+`/verify-token/`,
        method:'post',
        params
        })

        return res.data
    }

    
}




export default Auth