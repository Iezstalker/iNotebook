const express = require('express');
const User = require('../models/User');
const router = express.Router();


//Create a user using: POST: "/api/auth". Doesn't require Auth
router.get('/', (req, res)=>{

  console.log(req.body)
  const user = User(req.body)
  user.save()
  console.log(user)
  res.send(req.body);
  // res.send("hello")
})

module.exports = router