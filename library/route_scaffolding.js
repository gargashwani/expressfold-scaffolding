var route_scaffolding = `// Filename : ${process.argv[3].toLowerCase()}Routes.js 
const express = require('express')
const router = express.Router()

const {
   index, 
   store,
   show,
   update,
   destroy
} = require('../app/Http/Controllers/${process.argv[3]}Controller')

router.get('/', index);
router.post('/', store);
router.get('/', show);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;`;


module.exports = {
   route_scaffolding,
}