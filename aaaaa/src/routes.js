const express = require('express')
const router = express.Router()

const turma = require('./controllers/turma')
const aluno = require('./controllers/aluno')
const professor = require('./controllers/professor')

router.get('/', turma.listar)
router.post('/turma', turma.criar)

router.get('/aluno', aluno.listar)
router.delete('/aluno', aluno.excluir)

router.get('/professor', professor.listar)
router.post('/professor', professor.criar)
router.put('/professor/:id', professor.alterar)
router.delete('/professor/:id', professor.deletar)

module.exports = router