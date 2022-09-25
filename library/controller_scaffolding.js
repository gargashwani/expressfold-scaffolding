// console.log('controller_scaffolding file');
// console.log(process.argv[3]);

var controller_scaffolding = `// Filename : ${process.argv[3]}Controller.js 

const asyncHandler = require('express-async-handler')
const ${process.argv[3]} = require('../../Models/${process.argv[3]}')

// @desc     Get ${process.argv[3]}s
// @route   GET /api/${process.argv[3].toLowerCase()}s
// @access  Private
const index = asyncHandler(async(req, res) =>{
   const ${process.argv[3].toLowerCase()}s =  await ${process.argv[3]}.find()
   res.status(200).json({ 'message':'Get ${process.argv[3]}s', 'data':${process.argv[3].toLowerCase()}s});
})

// @desc     Store ${process.argv[3]}
// @route   POST /api/${process.argv[3].toLowerCase()}
// @access  Private
const store = asyncHandler(async(req, res) =>{
   const ${process.argv[3].toLowerCase()} = await ${process.argv[3]}.create({
      text: req.body.text
   })
   res.status(201).json({ 'message':'Store ${process.argv[3]}s', 'data':${process.argv[3].toLowerCase()}});
})

// @desc     Show ${process.argv[3]}
// @route   Put /api/${process.argv[3].toLowerCase()}/:id
// @access  Private
const show = asyncHandler(async(req, res) =>{
   const ${process.argv[3].toLowerCase()} = await ${process.argv[3]}.findById(req.params.id)
   if(!${process.argv[3].toLowerCase()}){
      res.status(400)
      throw new Error('${process.argv[3]} not found!')
   }
   res.status(201).json({
      'message': 'Update ${process.argv[3]} '. req.params.id,
      'data':${process.argv[3].toLowerCase()}
   });
})

// @desc     Update ${process.argv[3]}
// @route   Put /api/${process.argv[3].toLowerCase()}/:id
// @access  Private
const update = asyncHandler(async(req, res) =>{
   const ${process.argv[3].toLowerCase()} = await ${process.argv[3]}.findById(req.params.id)
   if(!${process.argv[3].toLowerCase()}){
      res.status(400)
      throw new Error('${process.argv[3]} not found!')
   }
   const updated${process.argv[3]} = await ${process.argv[3]} .findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })
   res.status(201).json({
      'message': 'Update ${process.argv[3]} '. req.params.id,
      'data':updated${process.argv[3]}
   });
})

// @desc     Delete ${process.argv[3]}
// @route   Delete /api/${process.argv[3].toLowerCase()}/:id
// @access  Private
const destroy = asyncHandler(async(req, res) =>{
   const ${process.argv[3].toLowerCase()} = await ${process.argv[3]}.findById(req.params.id)
   if(!${process.argv[3].toLowerCase()}){
      res.status(400)
      throw new Error('${process.argv[3]} not found!')
   }
   await ${process.argv[3].toLowerCase()}.remove()
   res.status(200).json({
      'message': 'Delete ${process.argv[3]} '. req.params.id,
   });
})

module.exports = {
   index,
   store,
   show,
   update,
   destroy
}
`;

module.exports = {
   controller_scaffolding,
}