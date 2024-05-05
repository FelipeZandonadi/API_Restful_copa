import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'db_selecoes'
})

connection.connect()

export default connection