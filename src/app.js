import express from 'express'

import conexao from '../infra/connection_db.js'

const app = express()

// indicar para express ler body (res) como json
app.use(express.json())

// ------------------------------------------------------------------------------------------------------------------------------
// C.R.U.D -> Create, Read, Update, Delete
// ------------------------------------------------------------------------------------------------------------------------------

// Create

app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = 'INSERT INTO selecoes SET ?'
    conexao.query(sql, selecao, (error, result) => {
        if (error) {
            res.status(400).json({ 'Alert': 'Dados não localizados', 'error': error })
        } else {
            res.status(201).json(result)
        }
    })
})

// Read
// Lê o mock das selecoes
app.get('/selecoes', (req, res) => {
    const sql = 'SELECT * FROM selecoes;'
    conexao.query(sql, (error, result) => {
        if (error) {
            res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})
// Lê o mock das selecoes por id
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM selecoes WHERE id=?'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
        } else {
            res.status(200).json(result[0])
        }
    })
})

// Update
app.put('/selecoes/:id', (req, res) => {
    const selecao = req.body
    const sql = 'UPDATE selecoes SET ? WHERE id=?'
    conexao.query(sql, [selecao, req.params.id], (error, result) => {
        if (error) {
            res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})

// Delete
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM selecoes WHERE id=?'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
        } else {
            res.status(200).json(result)
        }
    })
})

export default app
