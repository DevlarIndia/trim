module.exports = async(request, reply)=>{
    // similar to extending session, renewed:true indicates that token issued during login is being renewed
    return {
        token: 'abcdef2',
        status: 'success',
        renewed: true
    }
}