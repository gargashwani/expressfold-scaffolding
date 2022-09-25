console.log('model_scaffolding file');
console.log(process.argv[3]);

var model_scaffolding = `// Filename : ${process.argv[3]}.js 
const mongoose = require('mongoose')
const { Schema } = mongoose;

const ${process.argv[3].toLowerCase()}Schema = mongoose.Schema({
   text: {
      type: String,
      required: [true, 'Please add a text value']
   }
}, {
   timestamps: true
})

module.exports = mongoose.model('${process.argv[3]}', ${process.argv[3].toLowerCase()}Schema)
`;

module.exports = {
   model_scaffolding,
}