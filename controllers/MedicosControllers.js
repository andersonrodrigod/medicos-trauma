


module.exports = class MedicosControllers {
    static async showMedicos(req, res) {
        res.render('pages/allmedicos')
    }

    static async adicionarMedico(req, res) {
        res.render('pages/add')
    }

    static async adicionarMedicoPost(req, res) {
        const { nome, especialidade, turno, dia, frequencia} = req.body

        console.log(nome, especialidade, turno, dia, frequencia)

        res.redirect('/')
    }
}