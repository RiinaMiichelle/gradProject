
const express = require('express')

const router = express.Router()

// Now we simply use our "router" just like our "app" to create routes.

// router.get('', (req, res) => {
//   // perform some logic
//   res.json(users)
// })

// routers/users.js file

const UsersController = require('../controllers/users')

router.get('/users', UsersController.findWithQuery)


// And then we export the router:

module.exports = router