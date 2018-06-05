module.exports = async(request, reply)=>{
    const p = require('../models/post');
    return {
        status: 'success',
        post: await p({id: 301})
    }
}