import express from 'express'

const app = express()

// indicar para express ler body (res) como json
app.use(express.json())

// mock de dados
const selecoes = [
    {
        id: 1, 
        selecao: 'Brasil', 
        group: 'G'
    },
    {
        id: 2, 
        selecao: 'Suíça', 
        group: 'G'
    },
    {
        id: 3, 
        selecao: 'Camarões',
        group: 'G'
    },
    {
        id: 4, 
        selecao: 'Sérvia', 
        group: 'G'
    }
]

// Funções de busca
function buscaPorId(id) {
    return selecoes.filter( selecao => selecao.id === id) // return um array com apenas UM objeto dentro
}
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id === id)
}

// ------------------------------------------------------------------------------------------------------------------------------
// C.R.U.D -> Create, Read, Update, Delete
// ------------------------------------------------------------------------------------------------------------------------------

// Create

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

// Read
// Lê rota raiz (padrão)
app.get('/', (req, res) => {
    res.send('<a href="http://localhost:8080/selecoes">selecoes</a>')
})
// Lê o mock das selecoes
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})
// Lê o mock das selecoes por id
app.get('/selecoes/:id', (req, res) => {
    if (buscaPorId(Number(req.params.id))[0]) {
        res.json(buscaPorId(Number(req.params.id))[0])
    } else {
        res.send(`Seleção de Id ${req.params.id} disponível --> <a href="https://www.youtube.com/watch?v=GtL1huin9EE">aqui</a> <--`)
    }
})

// Update
app.put('/selecoes/:id', (req, res) => {
    // let selecaoDeleted = buscaPorId(Number(req.params.id))[0].selecao
    selecoes[buscarIndexSelecao(Number(req.params.id))].selecao = req.body.selecao
    selecoes[buscarIndexSelecao(Number(req.params.id))].group = req.body.group
    res.json(selecoes)
})

// Delete
app.delete('/selecoes/:id', (req, res) => {
    let selecaoDeleted = buscaPorId(Number(req.params.id))[0].selecao
    selecoes.splice(buscarIndexSelecao(Number(req.params.id)), 1)
    res.send(`Seleção ${selecaoDeleted} apagada com sucesso!`)
})

export default app
