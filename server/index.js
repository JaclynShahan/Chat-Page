const express = require('express')
const cors = require('cors')
const massive = require('massive')
const {json} = require('body-parser')
const session = require('express-session')
require('dotenv').config()

const controller = require(`${_dirname}/controller/controller`)

const app = express()

app.use(cors())
app.use(express.json())
app.use(
    session({
        secret: 'here is secret',
        resave: true,
        saveUninitialized: true
    })
)

app.get('/api/login', controller.loginUser)
app.put('/api/logout', controller.logoutUser)

const port = 3993

massive(process.env.connectionString).then(db => {
    app.set('db', db)
    app.listen(3993, () => {
        console.log(`Listening on port ${port}`)
    })
    console.log('Connected to database')
})