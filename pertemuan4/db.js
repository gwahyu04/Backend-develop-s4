const mysql = require('mysql2')

const conn  = mysql.createConnection({
    host: 'localhost',
    user: 'wahyu',
    password: 'qwerty',
    database: 'crud_db'
})

conn.connect((err) => {
    if (err) throw err
    console.log('Terhubung ke MYSQL!')
})

module.exports = conn