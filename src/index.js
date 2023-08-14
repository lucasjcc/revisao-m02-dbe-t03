const express = require('express')
const { dados } = require('../dados')
const app = express()
const PORTA = 3000
app.use(express.json())

app.get('/aulas/:id', (req, res) => {
    const { id } = req.params
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O id deve ser um número" })
    }
    const pessoaEncontrada = dados.find(pessoa => pessoa.id === Number(id))
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" })
    }
    if (pessoaEncontrada.cargo !== "aluno") {
        return res.status(403).json({ mensagem: "As aulas estão asssociadas somente à alunos" } )
    }
    return res.status(200).json(pessoaEncontrada.aulas)
})

app.listen(PORTA, () => console.log(`API rodando na porta ${PORTA}`))
