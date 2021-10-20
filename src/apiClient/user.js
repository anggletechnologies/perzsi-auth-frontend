

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


 class User{
    constructor(axios){
        this.axios = axios
    }
    

    

    /**
     * 
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async retrieveMe(){
        const res = await  this.axios({
        url:`/api/users/me/`,
        method:'get'
        })

        return res.data
    }

    /**
     * 
     * @param {Object} args
     * @param {Object} args.data
     * @param {String} [args.data.phone]
     * @param {String} [args.data.first_name]
     * @param {String} [args.data.lastname]
     * @param {String} [args.data.city]
     * @param {String} [args.data.state]
     * @param {String} [args.data.zip]
     * @param {String} [args.data.country]
     * @param {String} [args.data.business_name]
     * @param {String} [args.data.name]
     * @param {String} [args.data.url]
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async updateMe(args){
        const {data} = args
        const res = await  this.axios({
        url:`/api/users/me/`,
        method:'put',
        data
        })

        return res.data
    }


    /**
     * 
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async deleteMe(){
        const res = await  this.axios({
        url:`/api/users/me/`,
        method:'delete'
        })

        return res.data
    }
}




export default User