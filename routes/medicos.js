const express = require('express')
const router = express.Router()

const MedicosControllers = require('../controllers/MedicosControllers.js')

router.get('/escalamedica', MedicosControllers.showMedicos)
router.get('/adicionarmedico', MedicosControllers.adicionarMedico)
router.post('/adicionarmedico', MedicosControllers.adicionarMedicoPost)

module.exports = router