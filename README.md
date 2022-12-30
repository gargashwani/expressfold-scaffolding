# ExpressFold
An express based MVC Framework

*Installation create-expressfold*

Please refer the below command to install "create-expressfold" globally.

Git should be installed in your system(ignore if already installed)
- [Install Git in Windows](https://git-scm.com/download/win)
 - [Install Git in Linux](https://git-scm.com/download/linux)
 - [Install Git in Mac](https://git-scm.com/download/mac)
```
npm install -g npx
npm install -g create-expressfold
```

After installing "create-expressfold" globally, you can create expressfold project in your local system.

To create a new expressfold project
```
npx create-expressfold myfirstapp
cd myfirstapp
npm start
```

Rename *example.env* file to *.env* in the root directory

To make authentication scaffolding including auth middleware
```
npx expressfold make:auth
```
Add the below line in app.js before adding routes.
```
const {protect} = require('./app/Http/Middlewares/authMiddleware');
```
i.e.
```
const {protect} = require('./app/Http/Middlewares/authMiddleware');
app.use('/', require('./routes/webRoutes'));
app.use('/api/', require('./routes/apiRoutes'));
```

To make a new controller, model and routes
i.e. ProjectController, Project Model and Project Routes
```
npx expressfold make:controller Project
```

Access directories easily with defined paths
To access app directory
```
__app
```
To access base/root directory 
```
__base
```
To access routes directory 
```
__routes
```
To access public directory
```
__public
```
To access views directory
```
__views
```
To access config directory
```
__config
```

You can customize more in `config/constants.js`

To configure SMTP, Go to .env file and add the SMTP configuration in the given parameters.
```
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER='example@example.com'
MAIL_PASS='password'
```
Then, to send an email from any controller or route, you just have to import the mail configuration file.
i.e `const mailer =  require('./config/mail.js');`

To update any specific email options, For example, if you want to update email subject `mailer.mailOptions.subject='This is updated subject';`
```
// SMTP Server Config
const mailer =  require('./config/mail.js');

mailer.mailOptions.subject='This is updated subject';

mailer.transporter.sendMail(mailer.mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

```
For more information on [nodemail](https://nodemailer.com/)