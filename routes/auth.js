const express = require('express');
const router = express.Router();

const {login, register, user} = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.get('/user', user);

module.exports = router;