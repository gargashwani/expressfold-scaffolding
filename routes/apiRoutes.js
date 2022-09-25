const express = require('express')
const apiRouter = express.Router()


apiRouter.get('/', (req, res) => {
   res.json({
      'message':"Hello Expressfold!"
   });
});

module.exports = apiRouter;