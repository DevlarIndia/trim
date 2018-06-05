const fastify = require('fastify')();
const routes = require('./config/routes');


// registering routes as a plugin
fastify.register(routes);

// starting the fastify server 
const start = async()=>{
    try{   
        await fastify.listen(8000);
        console.log('listening on port 8000');
    } catch (error){
        console.log(error);
    }
}
start()