const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
// const path = require('path')
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
    saveUninitialized: true
}))

app.use(bodyParser.json())


// app.use(express.static(`${__dirname}/../build`))


app.post('/api/posts', controller.login)


// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

app.listen(port, () => {
    console.log('listening on port:', port)
})