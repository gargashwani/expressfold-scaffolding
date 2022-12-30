const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const mailer = {
  'transporter' : nodemailer.createTransport({
    host: process.env.MAIL_HOST ? process.env.MAIL_HOST : 'smtp.example.com',
    port: process.env.MAIL_PORT ? process.env.MAIL_PORT : '587',
    auth: {
         user: process.env.MAIL_USER ? process.env.MAIL_USER :'example@example.com',
         pass: process.env.MAIL_PASS ? process.env.MAIL_PASS :'password'
     }
  }),
  'mailOptions': {
    from: 'crm@devpremier.com', // sender address
    to: 'ashwanicrm@yopmail.com', // list of receivers
    subject: 'Subject of your email' // Subject line
  }
}
const viewPath =  path.resolve(__dirname, '../resources/views/emails');
const partialsPath = path.resolve(__dirname, '../resources/views/emails/partials');
mailer.transporter.use('compile', hbs({
  viewEngine: {
    extName: '.handlebars',
    // partialsDir: viewPath,
    layoutsDir: viewPath,
    defaultLayout: false,
    partialsDir: partialsPath,
    express
  },
  viewPath: viewPath,
  extName: '.handlebars',
}))

module.exports = mailer