const express = require('express')
const PORT = 4000
const app = express()
const cors = require('cors')
const session = require('express-session');
require('dotenv').config()


require('../Project_2/config/database') //to get Mongoose connected you have to require then put the path
const cookieParser = require('cookie-parser')
const affirRouter = require('../Project_2/routes/affirRoutes')
const index = require('../Project_2/routes/index.js')
const path = require('path')
const methodOverride = require('method-override')
const emoji = require('node-emoji')

const passport = require ('passport');

// const createError = require('http-error')
app.use(cors())


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware 
app.use(methodOverride('_method'))
app.use('/affirmations',affirRouter)

app.use(session ({
    secret: 'PositiveVibes',
    resave: false, 
    saveUninitialized: true
  }))
  
  // app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());
  
app.use('/', index);
app.use('/', affirRouter);
  

//error handler 
// app.use(function(req, res, next) {
//     next(createError(404));
//   });

app.listen(PORT, () =>{
    console.log(`✅ PORT: ${PORT} 🌟`);
})