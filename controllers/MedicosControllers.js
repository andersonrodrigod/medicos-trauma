const path = require('path')
const fs = require('fs')


module.exports = class MedicosControllers {
    static async showMedicos(req, res) {
        res.render('pages/allmedicos')
    }

    static async adicionarMedico(req, res) {
        res.render('pages/add')
    }

    static async adicionarMedicoPost(req, res) {
        const { nome, especialidade, turno, dia, frequencia} = req.body

        const dataPath = "../data/medicos.json"
        const dataMedicosPath = path.join(__dirname, dataPath) 
        const dataMedicos = await fs.readFileSync(dataMedicosPath, 'utf-8')
        const dataMedicosJson = JSON.parse(dataMedicos)
        const db = dataMedicosJson

        const id = db.map(prop => prop.id)
        const max = id.reduce((acc, obj) => {
            if (obj > acc) {
                return obj
            } else {
                return acc
            }
        }, 0)

        const maxId = max + 1
       
        const newMedico = {
            id: maxId,
            nome,
            especialidade,
            turno,
            dia,
            frequencia
        }

        db.push(newMedico)
        const updateData = JSON.stringify(db, null, 2)

        await fs.writeFileSync(dataMedicosPath, updateData, 'utf-8')

        console.log(newMedico)

        res.redirect('/adicionarmedico')
    }

    static async showMedicosAdmin(req, res) {
        const dataPath = '../data/medicos.json'
        const dataMedicosPath = path.join(__dirname, dataPath)
        const dataMedicos = await fs.readFileSync(dataMedicosPath, 'utf-8')
        const dataMedicosJson = JSON.parse(dataMedicos)
        const db = dataMedicosJson

        const medicosManha = db.filter((medico) => {
            return medico.turno === "manha"
        })
        
        const medicosTarde = db.filter((medico) => {
            return medico.turno === "tarde"
        })

        const medicosNoite = db.filter((medico) => {
            return medico.turno === "noite"
        })
        
        console.log(medicosTarde)
        res.render('pages/medicosadmin', {medicosManha, medicosTarde, medicosNoite})
    }

    static async edit(req, res) {
        res.render('page/edit')
    }
}