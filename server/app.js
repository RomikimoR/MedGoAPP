var createError = require('http-errors');
var express = require('express');
const sendmail = require('sendmail')({
  smtpHost:'localhost',
  smtpPort: 3001
});
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var cors = require('cors');
var mongoose = require('mongoose');


const Mail = require('./schema');


var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//connectToDB
mongoose.connect('mongodb://localhost/db').then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/mail', cors(), function(req, res){
   var  mailFrom= req.body.emailFrom;
   var  mailTo= req.body.emailTo;
   var  message= req.body.message;

    var _m = new Mail();
    _m.emailFrom = mailFrom;
    _m.emailTo = mailTo;
    _m.message = message;
    
    _m.save(function(err){
      if(err){
        res.send(err);
        return;
      }
      res.send({message : 'Bravo, l\'email est maintenant stockée en base de données'});
      console.log("bddok")
      
    })
 
    sendmail({
      from:mailFrom,
      to: mailTo,
      html: message
    }, function(err, reply){
      console.log(err && err.stack);
      console.dir(reply);
    }) 
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
