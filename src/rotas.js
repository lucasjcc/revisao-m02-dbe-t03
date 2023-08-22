const express = require('express')
const { listarAulas, listarAula, criarAula } = require('./controladores/alunos')
const rotas = express()

rotas.get('/alunos/:id/aulas', listarAulas)
rotas.get('/alunos/:id/aulas/:idAula', listarAula)
rotas.post('/alunos/:id', criarAula)

module.exports = {
    rotas
}