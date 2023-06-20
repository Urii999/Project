const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

router.post('/register', userController.create);

router.post('/login', userController.login);

// Retrieve all users
router.get('/', auth.authenticate, auth.authenticateAdmin, userController.findAll);

// Añadir admin: true a un usuario existente
//router.put('/admin/:id', auth.authenticate, auth.authenticateAdmin, userController.addAdmin);

// Retrieve a single user with id
router.get('/:id', auth.checkAuth, userController.findOne);

// Update a user with id
router.put('/:id', auth.checkAuth, userController.update);

// Delete a user with id
router.delete('/:id', auth.checkAuth, userController.delete);

module.exports = router;
