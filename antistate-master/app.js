'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var ignes = require('./routes/ignes')

//var MongoClient = require('mongodb').MongoClient;
//var reg = require('./routes/registration')






//var loginRoute = require('./routes/registration')
//app.use('/registration', loginRoute) 

var app = express();    

 //view engine setup
 app.engine('html', require('pug').renderFile)

 app.set('views',__dirname + '/views');
 app.set('view engine', 'pug');
 app.set('view engine', 'html')
 
 var viewsPath = path.join(__dirname, '/views') 
app.set('view engine','pug')

 app.set('views', viewsPath)

 app.get('/', function(req, res){

 res.render("index");

});
  

          //||&&&routes&&&||\\
//app.use('/staticc', express.static('publiccc'));
//app.use('/static', express.static('publiccc'));


app.use('/static', express.static(__dirname + '/publiccc'));
app.use(logger('dev'));







app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
    

app.use('/', routes);
app.use('/users', users)

app.use('/a', ignes)
var ignes = require('./routes/ignes')
//app.use('/reg', reg);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace

 if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
/*
mongod
MongoClient.connect('b://localhosbase', function(err, database){
if(err) {t://27017/
        return console.log(err);
    }
    db = database;

})
*/  

    /*
//Устанавливаем соединение с mongoose
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dbUser:dbUserpassword@socialnetwork.e2iwn.mongodb.net/Socialnetwork?retryWrites=true&w=majority;'//замените url!!!
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

*/