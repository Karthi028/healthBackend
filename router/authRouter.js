const express = require('express');
const { login, register, logout, me} = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authmiddleware');

const authRouter = express.Router();

authRouter.post('/login',login)
authRouter.post('/register', register);
authRouter.post('/logout',isAuthenticated,logout)
authRouter.get('/me',isAuthenticated,me)



module.exports = authRouter;    