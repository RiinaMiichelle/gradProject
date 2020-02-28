const express = require('express')

const users = require('./routers/users')
const usersContacts = require('./routers/usersContacts')
const availableCheckouts = require('./routers/availableCheckouts')
const shelter = require('./routers/shelter')
const shelterContacts = require('./routers/shelterContacts')
const dogs = require('./routers/dogs')

const app = express()

const port = process.env.PORT || 4000


app.use(users)
app.use(usersContacts)
app.use(availableCheckouts)
app.use(shelter)
app.use(shelterContacts)
app.use(dogs)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))