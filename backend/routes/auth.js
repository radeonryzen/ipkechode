const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post('/',[
   body('username','Enter a username of more than 5 characters').isLength({ min: 5 }),
   body('email','Enter a valid email').isEmail(),
   body('password','passsword must be atleast 5 characters').isLength({ min: 5 }),

],(req,res)=>{
   // console.log(req.body);
   // const user = User(req.body);
   // user.save();
   // res.send("Hello")
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   
   User.create({
      username: req.body.username,
      email:req.body.email,
      password: req.body.password,
    }).then(user => res.json(user)).catch(err=>console.log(err))
})
module.exports = router