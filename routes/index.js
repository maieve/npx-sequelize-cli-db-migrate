const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UserController');

// default route
router.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// Retrieve all users
router.get('/users', usersController.index );


// Retrieve user with id
router.get('/user/:id', usersController.getUser);

// Add a new user
router.post('/user', usersController.store);

//  Update user with id
router.put('/user', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

//  Delete user
router.delete('/user', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});


module.exports=router;