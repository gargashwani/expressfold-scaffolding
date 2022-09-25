// console.log('process.argv', process.argv.slice(2));
// console.log('process.argv', process.argv[2]);
var fs = require('fs');


function makeController(){
      // Check if Http folder exists, if not then create a new.
      var http = './app/Http';
      if (!fs.existsSync(http)){
        fs.mkdirSync(http);
      } 

      // Check if Controllers folder exists, if not then create a new.
      var dir = './app/Http/Controllers';
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }

      // Check if Controllers folder exists, if not then create a new.
      var authdir = './app/Http/Controllers/Auth';
      if (!fs.existsSync(authdir)){
          fs.mkdirSync(authdir);
      }
      const {auth_controller_scaffolding} = require('./auth/auth_controller_scaffolding')
      // @ Create Controler File
      const controllers_path='./app/Http/Controllers/Auth/';
      const file_name=`UserController.js`;
      const file_with_path=`${controllers_path}${file_name}`;
      // Open Controller File
      fs.open(file_with_path, 'w', function (err, 
        file) {
        if (err) throw err;
        console.log('Saved!');
      });

      // Write Controller Scafolding data into new controller file.
      fs.appendFile(file_with_path,`${auth_controller_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${controllers_path}`)})
      return true;
}

function makeAuthRouter(){
  var dir = './routes';

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  const { route_scaffolding } = require('./auth/auth_route_scaffolding')
  // @ Create Route File
  const routes_path='./routes/';
  const file_name=`userRoutes.js`;
  const file_with_path=`${routes_path}${file_name}`;
  // Open Controller File
  fs.open(file_with_path, 'w', function (err, 
    file) {
    if (err) throw err;
    console.log('Saved!');
  });

  // Write Route Scafolding data into new route file.
  fs.appendFile(file_with_path,`${route_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${routes_path}`)})
  return true;
}

function makeModel(){
  var dir = './app/Models';

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  const { auth_model_scaffolding } = require('./auth/auth_model_scaffolding')
  console.log(auth_model_scaffolding);
  // @ Create Route File
  const routes_path='./app/Models/';
  const file_name=`User.js`;
  const file_with_path=`${routes_path}${file_name}`;
  // Open Controller File
  fs.open(file_with_path, 'w', function (err, 
    file) {
    if (err) throw err;
    console.log('Saved!');
  });

  // Write Route Scafolding data into new route file.
  fs.appendFile(file_with_path,`${auth_model_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${routes_path}`)})
  return true;
}

function makeAuthMiddleware(){
  var dir = './app/Http/Middlewares';

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  const { auth_middleware_scaffolding } = require('./auth/auth_middleware_scaffolding')
  // @ Create Route File
  const routes_path='./app/Http/Middlewares/';
  const file_name=`authMiddleware.js`;
  const file_with_path=`${routes_path}${file_name}`;
  // Open Controller File
  fs.open(file_with_path, 'w', function (err, 
    file) {
    if (err) throw err;
    console.log('Saved!');
  });

  // Write Route Scafolding data into new route file.
  fs.appendFile(file_with_path,`${auth_middleware_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${routes_path}`)})
  return true;
}

makeAuthRouter();
makeController();
makeModel();
makeAuthMiddleware();

module.exports = {
  makeController,
  makeAuthRouter,
  makeModel,
  makeAuthMiddleware
}