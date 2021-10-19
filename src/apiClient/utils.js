

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


 class Utils{
    constructor(axios){
        this.axios = axios
        this.baseUrl = "/api/utils"
    }
    


    /**
     * 
     * @param {Object} args
     * @param {Object} args.params
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async list(args){
        const {params} = args
        const res = await  this.axios({
        url:this.baseUrl+"/",
        method:'get',
        params
        })
        return res.data

    }

    /**
     * 
     * @param {Object} args
     * @param {"currencies"|"none"} args.type
     * @returns {Promise<CroimoSuccessResponse>}
     */
    async retrieve(args){
        const {type} = args
        const res = await  this.axios({
        url:this.baseUrl+`/${type}/`,
        method:'get'
        })

        return res.data
    }

   

}




export default Utils