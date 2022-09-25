global.__basedir = __dirname;
const express = require('express')
require('dotenv').config();
const {errorHandler} = require('./app/Http/Middlewares/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/database')
connectDB()
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use('/', require('./routes/webRoutes'));
app.use('/api/', require('./routes/apiRoutes'));

app.use(errorHandler)

app.listen(port, console.log(`Server running on port ${port}`));
