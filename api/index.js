// userrn название база данных
const express = require('express')
const userRoutes = require('./routes.js')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }))

const port = 3000

app.use('/', userRoutes)

app.listen(port, ()=>{
    console.log('Server start')
})

module.exports = app