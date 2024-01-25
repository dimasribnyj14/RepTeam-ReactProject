const { Client } = require('pg')

const client = new Client({
    user: 'put your username',
    host: 'put your host',
    database: 'put your db name',
    password: 'put your password',
    port: 'put your port (int)'
})

client.connect()

module.exports = client