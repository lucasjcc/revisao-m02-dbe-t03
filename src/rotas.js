const express = require('express')
const { listarAulas, listarAula, criarAula } = require('./controladores/alunos')
const { validarIndex } = require('./intermediarios/validarIndex')
const rotas = express()


rotas.get('/alunos/:id/aulas', validarIndex, listarAulas)
rotas.get('/alunos/:id/aulas/:idAula', listarAula)
rotas.post('/alunos/:id', validarIndex, criarAula)

module.exports = {
    rotas
}