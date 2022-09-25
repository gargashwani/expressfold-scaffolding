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
      const {controller_scaffolding} = require('./controller_scaffolding.js')
      // @ Create Controler File
      const controllers_path='./app/Http/Controllers/';
      const file_name=`${process.argv[3]}Controller.js`;
      const file_with_path=`${controllers_path}${file_name}`;
      // Open Controller File
      fs.open(file_with_path, 'w', function (err, 
        file) {
        if (err) throw err;
        console.log('Saved!');
      });

      // Write Controller Scafolding data into new controller file.
      fs.appendFile(file_with_path,`${controller_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${controllers_path}`)})
      return true;
}

function makeRouter(){
        var dir = './routes';

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        const { route_scaffolding } = require('./route_scaffolding')
        // @ Create Route File
        const routes_path='./routes/';
        const file_name=`${process.argv[3].toLowerCase()}Routes.js`;
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
  const { model_scaffolding } = require('./model_scaffolding')
  // @ Create Route File
  const routes_path='./app/Models/';
  const file_name=`${process.argv[3]}.js`;
  const file_with_path=`${routes_path}${file_name}`;
  // Open Controller File
  fs.open(file_with_path, 'w', function (err, 
    file) {
    if (err) throw err;
    console.log('Saved!');
  });

  // Write Route Scafolding data into new route file.
  fs.appendFile(file_with_path,`${model_scaffolding}`, ()=>{console.log(`${file_name} created successfully at ${routes_path}`)})
  return true;
}

makeRouter();
makeController();
makeModel();

module.exports = {
  makeController,
  makeRouter,
  makeModel
}