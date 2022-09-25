var route_scaffolding = `// Filename : userRoutes.js 
const express = require('express')
const router = express.Router()

const {
   index, 
   registerUser,
   loginUser,
   getMe,
   show,
   update,
   destroy
} = require('../app/Http/Controllers/Auth/UserController')

const { protect } = require('../app/Http/Middlewares/authMiddleware')

router.get('/',  index);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/',  show);
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;`;


module.exports = {
   route_scaffolding,
}