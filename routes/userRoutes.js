const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registration Route
router.post('/register', userController.register);

// Login Route
router.post('/login', userController.login);

// Logout Route
router.post('/logout', userController.logout);

// Check if user is logged in
router.post('/isLoggedIn', userController.isLoggedIn);

// Route to get all users
router.get('/getAllUsers', userController.getAllUsers);

// Route to get all users
router.get('/getUserByEmail/:email', userController.getUserByEmail);



module.exports = router;
