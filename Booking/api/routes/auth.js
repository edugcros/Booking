const { login, register } = require("../controllers/auth.js") ;

const { Router } = require('express');
const router = Router();

router.route('/register')
    .post(register)
router.route('/login')
    .post(login)

module.exports = router;