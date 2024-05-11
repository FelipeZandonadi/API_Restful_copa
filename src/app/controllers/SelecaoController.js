import conexao from '../database/connection_db.js'

class SelecaoController {

    index(req, res) {
        const sql = 'SELECT * FROM selecoes;'
        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
            } else {
                res.status(200).json(result)
            }
        })
    }
    show(req, res) {
        const id = req.params.id
        const sql = 'SELECT * FROM selecoes WHERE id=?'
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
            } else {
                res.status(200).json(result[0])
            }
        })
    }
    store(req, res) {
        const selecao = req.body
        const sql = 'INSERT INTO selecoes SET ?'
        conexao.query(sql, selecao, (error, result) => {
            if (error) {
                res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
            } else {
                res.status(201).json(result)
            }
        })
    }
    update(req, res) {
        const selecao = req.body
        const sql = 'UPDATE selecoes SET ? WHERE id=?'
        conexao.query(sql, [selecao, req.params.id], (error, result) => {
            if (error) {
                res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
            } else {
                res.status(200).json(result)
            }
        })
    }
    delete(req, res) {
        const id = req.params.id
        const sql = 'DELETE FROM selecoes WHERE id=?'
        conexao.query(sql, id, (error, result) => {
            if (error) {
                res.status(404).json({ 'Alert': 'Dados não localizados', 'error': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

}

// padrao Singleton
export default new SelecaoController()
