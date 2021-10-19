

/**
 * 
 * @typedef {Object} HandlerResponse
 * @property {"success"|"error"|"warning"|"info"} status
 * @property {String} message
 */

/**
 * 
 * @param {Object} error 
 * @param {Object} [error.response]
 * @param {Number} error.response.status
 * @param {Object} [error.response.data]
 * @returns {HandlerResponse}
 */
export const errorHandler = error =>{
    const {message} = error?.response?.data||{}
    return {status:"error",message}
}

