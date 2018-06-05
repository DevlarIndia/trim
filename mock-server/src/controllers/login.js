module.exports = async(request, reply)=>{
    // renewed parameter is to check whether the token issued is fresh or renewed, for login, it will always be false
    return {
        token: 'abcdef',
        status: 'success',
        renewed: false,
        userInfo: require('../models/user')()
    }
}