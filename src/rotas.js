const express = require('express')
const { listarAulas, listarAula } = require('./controladores/alunos')
const rotas = express()

rotas.get('/alunos/:id/aulas', listarAulas)
rotas.get('/alunos/:id/aulas/:idAula', listarAula)

module.exports = {
    rotas
}