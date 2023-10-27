const express = require('express')
const router = express.Router()

const AuthControllers = require('../controllers/AuthControllers.js')

router.get('/', AuthControllers.login)


module.exports = router