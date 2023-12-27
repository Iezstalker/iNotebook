const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'NileshKumar$G'

//Create a user using: POST: "/api/auth/createUser". No login required.
router.post('/createUser',[
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , async (req, res)=>{ 

  //If there are errors, return bad request & the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  //Check whether the user with email already exists
  try{

  let user = await User.findOne({email:req.body.email});
  if(user){
    return res.status(400).json({error:"Sorry user exist with this email !!"})
  } 


  //Create a new user
  const salt = await bcrypt.genSalt(10)
  const SecPass = await bcrypt.hash(req.body.password, salt) 
  user = await User.create({
      name: req.body.name,
      password: SecPass,
      email: req.body.email,
    })
  //   .then(user => res.json(user))
  //   .catch(err=> {console.log(err)
  // res.json({error: 'Please enter a unique value for email', message: err.message})})


  const data ={
    user:{
      id:user.id
    }
  }

  const authToken = jwt.sign(data, JWT_SECRET)
  res.json({authToken})
  }
   
  catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error!!");
  }

  // res.send("hello")
})


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