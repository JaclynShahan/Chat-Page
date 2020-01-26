const express = require('express')
const cors = require('cors')
const massive = require('massive')
const { json } = require('body-parser')
const session = require('express-session')
require('dotenv').config()

const controller = require(`${__dirname}/controller/controller`)

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

// const getUser = (req, res) => {
//   const dbInstance = req.app.get('db')
//   dbInstance.getUser().then(resp => res.status(200).send(resp))
// }
app.get(`/api/authUser`, (req, res) => {
  const dbInstance = req.app.get('db')
  const { username, password } = req.body
  console.log('Verified', username, password)
  dbInstance.getUser(req.query.username, req.query.password)
  .then((resp) => {
      console.log(resp)
      res.status(200).send(resp)
  })
  .catch((err) => {
      console.log(err)
  })
//   if (
//     username == req.params.username &&
//     password == req.params.password
//   ) {
//     dbInstance.getUser(req.query.username, req.query.password).then(() => {
//         app.get('/api/login', controller.loginUser)
//         getUser(req, res.status(200).send(true))
//       }).catch((err) => {
//           console.log(err)
//       })
  
//   } else {
//     res.status(200).send(false)
//   }
 
})
// app.post(`/api/authUser`, (req, res) => {
//   console.log('User Request Received')
//   const { username, password } = req.body
//   console.log(process.env.password, process.env.username)
//   console.log(username, password)
//   if (username == process.env.username && password == process.env.password) {
//     res.status(200).send(true)
//   } else {
//     res.status(200).send(false)
//   }
// })
app.post(`/api/addUser`, (req, res) => {
    const { firstName, lastName, email, createUsername, createPassword, image} = req.body
    console.log('Request received', firstName, lastName, email, createUsername, createPassword, image)
    console.log(req.body)
    const dbInstance = req.app.get('db')
    dbInstance.addUser(firstName, lastName, email, createUsername, lastName, image).then(() => {
      getUser(req, res)
    })
  })

massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(3993, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})
