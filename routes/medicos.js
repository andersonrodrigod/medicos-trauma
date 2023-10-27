const express = require('express')
const router = express.Router()

const MedicosController = require('../controllers/MedicosControllers.js')

router.get('/escalamedica', MedicosController.showMedicos)

module.exports = router