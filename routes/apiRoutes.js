const express = require('express')
const apiRouter = express.Router()
const path = require('path')

apiRouter.get('/', (req, res) => {
   res.json({
      'message':"Hello Expressfold!"
   });
});

apiRouter.get('/mailable', (req, res) => {
   // SMTP Server Config
   const mailer =  require( path.resolve(__config, 'mail.js'));
   const logo = req.get('host')+'/images/logo.jpg'
   mailer.mailOptions.subject='This is updated subject';
   mailer.mailOptions.template='index';
   mailer.mailOptions.context ={
      logo: logo
   };
   mailer.transporter.sendMail(mailer.mailOptions, function (err, info) {
      if(err)
      console.log(err)
      else
      console.log(info);
   });
   res.json({
      'message':"Mail sent!"
   });
});

module.exports = apiRouter;