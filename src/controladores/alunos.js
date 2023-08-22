const { dados } = require('../../dados')

const listarAulas = (req, res) => {
    const { id } = req.params
    const pessoaEncontrada = dados.find(pessoa => pessoa.id === Number(id))
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" })
    }
    if (pessoaEncontrada.cargo !== "aluno") {
        return res.status(403).json({ mensagem: "As aulas estão associadas somente a alunos" })
    }
    return res.status(200).json(pessoaEncontrada.aulas)
}

const listarAula = (req, res) => {
    const { id, idAula } = req.params
    if (isNaN(Number(id)) || isNaN(Number(idAula))) {
        return res.status(400).json({ mensagem: "Os campos identificadores devem ser numéricos" })
    }
    const pessoaEncontrada = dados.find(pessoa => pessoa.id === Number(id))
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" })
    }
    if (pessoaEncontrada.cargo !== "aluno") {
        return res.status(403).json({ mensagem: "As aulas estão associadas somente a alunos" })
    }
    const aulaProcurada = pessoaEncontrada.aulas.find(aula => aula.id === Number(idAula))
    if (!aulaProcurada) {
        return res.status(404).json({ mensagem: "Aula não encontrada" })
    }
    return res.status(200).json(aulaProcurada)
}

let proximoId = 16
const criarAula = (req, res) => {
    const { id } = req.params
    const { nome, vista } = req.body
    if (!id || !nome || vista === undefined) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    const pessoaEncontrada = dados.find(pessoa => pessoa.id === Number(id))
    
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" })
    }

    if (pessoaEncontrada.cargo !== "aluno") {
        return res.status(403).json({ mensagem: "As aulas estão associadas somente a alunos" })
    }

    const novaAula = {
        id: proximoId,
        nome,
        vista: vista === "true" ? Boolean(vista) : false
    }
    proximoId++
    pessoaEncontrada.aulas.push(novaAula)
    return res.status(201).json(novaAula)
}

module.exports = {
    listarAulas,
    listarAula,
    criarAula
}