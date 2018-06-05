module.exports = async(request, reply)=>{
    const p = require('../models/post');
    return {
        posts: [
            await p({id: 100}),
            await p({id: 200}),
            await p({id: 300})
        ]
    }
}