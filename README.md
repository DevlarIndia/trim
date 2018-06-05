# trim
The home of the trim project

`TODO: mock server request format`
### Running the mock server
```
cd mock-server
npm i
npm start
```

### Routes
__Base url__: http://localhost:8000`

__Routes__:
```javascript
// authentication
get('/login');
get('/signup');
get('/token/refresh');
get('/token/revoke/:token');
get('/token/revoke/all');

// account info
get('/user/info');

// create post
post('/post');

// get feed
get('/feed');
```
