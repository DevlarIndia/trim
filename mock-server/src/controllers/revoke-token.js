module.exports = async(request, reply)=>{
    // assume loggin out of a certain location. All issued tokens are to be associated with location.
    return {
        status: 'success',
        message: 'Logged out from location',
        is_current_logged_out: false
    }
}