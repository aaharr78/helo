const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config();

const app = express()
const port = 4000

const controller = require('./controller')

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('db is connected!')
})
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())

// app.post('/api/posts', controller.create)


app.listen(port, () => {
    console.log('listening on port:', port)
})