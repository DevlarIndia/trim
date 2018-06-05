module.exports = {
    // welcome route
    main: require('../controllers/welcome'),

    // user authentication
    login: require('../controllers/login'),
    signup: require('../controllers/signup'),
    refresh: require('../controllers/refresh-token'),
    revoke: require('../controllers/revoke-token'),
    revokeAll: require('../controllers/revoke-all-tokens'),

    // get user info
    accountInfo: require('../controllers/fetch-user-details'),

    // post creation
    post: require('../controllers/create-post'),

    // posts fetching/ feed generation
    feed: require('../controllers/feed')
}