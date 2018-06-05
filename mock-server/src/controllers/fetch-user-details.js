module.exports = async(request, reply)=>{
    // return user details for current user 
    return {
        status: 'success',
        userInfo: await require('../models/user')()
    }
}