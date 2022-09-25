# ExpressFold
An express based MVC Framework

### Setup
Rename *example.env* file to *.env* in the root directory

To make authentication scaffolding including auth middleware
```
yarn artisan make:auth
or
npm run artisan make:auth
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
yarn artisan make:controller Project
```