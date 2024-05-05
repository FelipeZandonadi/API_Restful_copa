import app from './src/app.js'
import connection from './infra/connection_db.js'

connection.connect((error) => {
    if (error) {
        console.error(error)
    } else {
        console.log('Conexão com o Data base feita com sucesso!')
        // escutar a porta 8080
        app.listen(8080, ()=>{
        console.log(`Servidor rodando no endereço http://localhost:8080`)
        })
    }
})
