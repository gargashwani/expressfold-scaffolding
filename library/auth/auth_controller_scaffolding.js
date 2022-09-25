// console.log('controller_scaffolding file');
// console.log(process.argv[3]);

var auth_controller_scaffolding = `// Filename : UserController.js 

const asyncHandler = require('express-async-handler')
const User = require('../../../Models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @desc     Get Users
// @route   GET /api/users
// @access  Private
const index = asyncHandler(async(req, res) =>{
   const users =  await User.find().select('-password')
   res.status(200).json({ 'message':'Get Users', 'data':users});
})

// @desc     Register a new user
// @route   POST /api/user
// @access  Public
const registerUser = asyncHandler(async(req, res) =>{
   const {name, email, password} = req.body;
   if(!name || !email || !password){
      res.status(400)
      throw new Error('Please add all the fields!')
   } 

   // Check if email exists
   const userExists = await User.findOne({email})
   if(userExists){
      res.status(400)
      throw new Error('Account already exists with this email address!')
   }

   // Hash password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   // Create User
   const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword
   })

   if(user){
      res.status(201).json({ 
         'message':'User registered', 
         'data':{
            _id:        user.id,
            name:    user.name,
            email:   user.email ,
            token:   generateToken(user._id),
         }
      });
   }else{
      res.status(400)
      throw new Error('Invalid user data!')
   }
})

// @desc     Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) =>{
   const {email, password} = req.body;
   if(!email || !password){
      res.status(400)
      throw new Error('Please add all the fields!')
   }
   // Check for user email
   const user = await User.findOne({email})
   if(user && (await bcrypt.compare(password, user.password))){
      res.status(200).json({ 
         _id:user.id,
         name: user.name,
         email: user.email ,
         token: generateToken(user._id)
      });
   }else{
      res.status(400)
      throw new Error('Invalid credentials.')
   }
   res.status(201).json({ 'message':'Login User.', 'data':user});
})


// Generate JWT
const generateToken = (id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET, {
      expiresIn: '30d',
   })
}

// @desc     Get current loggedIn User
// @route   POST /api/users/me
// @access  Private
const getMe = asyncHandler(async(req, res) =>{
   const {_id, name, email} = await User.findById(req.user.id).select('-password')
   res.status(201).json({
      id:_id,
      name,
      email
   });
})

// @desc     Show User
// @route   Put /api/user/:id
// @access  Private
const show = asyncHandler(async(req, res) =>{
   const user = await User.findById(req.params.id).select('-password')
   if(!user){
      res.status(400)
      throw new Error('User not found!')
   }
   res.status(201).json({
      'message': 'User '. req.params.id,
      'data':user
   });
})

// @desc     Update User
// @route   Put /api/user/:id
// @access  Private
const update = asyncHandler(async(req, res) =>{
   const user = await User.findById(req.params.id).select('-password')
   if(!user){
      res.status(400)
      throw new Error('User not found!')
   }
   const updatedUser = await User .findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })
   res.status(201).json({
      'message': 'Updated User '. req.params.id,
      'data':updatedUser
   });
})

// @desc     Delete User
// @route   Delete /api/user/:id
// @access  Private
const destroy = asyncHandler(async(req, res) =>{
   const user = await User.findById(req.params.id)
   if(!user){
      res.status(400)
      throw new Error('User not found!')
   }
   await user.remove()
   res.status(200).json({
      'message': 'Deleted User '. req.params.id,
   });
})

module.exports = {
   index,
   registerUser,
   loginUser,
   getMe,
   show,
   update,
   destroy
}`;

module.exports = {
   auth_controller_scaffolding,
}