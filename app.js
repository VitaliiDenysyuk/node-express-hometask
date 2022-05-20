var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { initBase } = require('./repositories/user.repository');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
initBase()
    .then(
        (result)=>console.log(`database init`),
        (error)=>{
            console.log(`fail init base`);
            throw new Error(`fail init base`);
        }
    )
module.exports = app;
