const controllers = require('./controllers');
async function routes(fastify, options){
    fastify.get('/', controllers.main);

    // authentication
    fastify.get('/login', controllers.login);
    fastify.get('/signup', controllers.signup);
    fastify.get('/token/refresh', controllers.refresh);
    fastify.get('/token/revoke/:token', controllers.revoke);
    fastify.get('/token/revoke/all', controllers.revokeAll);

    // account info
    fastify.get('/user/info', controllers.accountInfo);

    // create post
    fastify.post('/post', controllers.post);

    // get feed
    fastify.get('/feed', controllers.feed);
}

module.exports = routes;