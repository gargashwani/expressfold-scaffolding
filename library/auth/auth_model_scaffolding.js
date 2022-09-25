var auth_model_scaffolding = `// Filename : User.js 
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
`;

module.exports = {
   auth_model_scaffolding,
}