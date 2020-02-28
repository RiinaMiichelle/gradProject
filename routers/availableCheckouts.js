
const express = require('express')

const router = express.Router()



// Now we simply use our "router" just like our "app" to create routes.

router.get('', (req, res) => {
  // perform some logic
  res.json()
})


// And then we export the router:

module.exports = router