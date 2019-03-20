const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
//db = all database functions
const db = require('./queries');
//required parser for JSON objects
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//allows app to use url routes
var router = express.Router();

//For root, return simple info
app.get('/', (req, res) => {
  res.json({ info: 'api info'});
});

//GET to get all users (old)
app.get('/users', db.getUsers);
//GET to get one user (old)
app.get('/users/:id', db.getUserById);

//PUT to get one user (old)
app.put('/users/:id', db.updateUser);

//DELETE a user (old)
app.delete('/users/:id', db.deleteUser);

//POST to register a user
app.post('/registerUser', db.register);

//POST TO login
app.post('/login', db.login);

//POST TO CREATE FAMILY
app.post('/createFamily', db.createFamily);

//LINK API
app.use('/api', router);

//Listen on chosen port
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
