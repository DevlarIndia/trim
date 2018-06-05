module.exports = async(request, reply)=>{
    // intuition: log out from all devices
    return {
        status: 'success',
        message: 'logged out from all locations',
        is_current_logged_out: true
    }
}