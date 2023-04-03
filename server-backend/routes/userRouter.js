const register = require('../controllers/user.js');
const router = require('express').Router();

router.post('/', register)

module.exports = router;