// Import filesystem
var fs = require('fs');

console.log('__dirname ');
console.log(__dirname );

// Check if app directory exists, if not then create a new.
var app_dir = './app';
if (!fs.existsSync(app_dir)){
   fs.mkdirSync(app_dir);
} 

// Check if config directory exists, if not then create a new.
var config_dir = './config';
if (!fs.existsSync(config_dir)){
   fs.mkdirSync(config_dir)
} 

// destination will be created or overwritten by default.
fs.copyFile(__dirname+'/config/database.js', __dirname+'/config/database.js', (err) => {
   if (err) throw err;
   console. log('Configuration files are created!');
});

