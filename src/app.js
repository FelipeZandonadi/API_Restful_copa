import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

// indicar para express ler body (res) como json
app.use(express.json())

// ------------------------------------------------------------------------------------------------------------------------------
// C.R.U.D -> Create, Read, Update, Delete
// ------------------------------------------------------------------------------------------------------------------------------

app.post('/selecoes', SelecaoController.store)
app.get('/selecoes', SelecaoController.index)
app.get('/selecoes/:id', SelecaoController.show)
app.put('/selecoes/:id', SelecaoController.update)
app.delete('/selecoes/:id', SelecaoController.delete)

export default app
