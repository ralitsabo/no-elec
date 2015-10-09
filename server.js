var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');



app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'sometext',
                 saveUninitialized: true,
                 resave: true}));

app.get('/',function(req,res){
  res.send("Our first blah");
  console.log(req.cookies);
  console.log('----------------');
  console.log(req.session);
});


app.get('/',function(req,res){
  sess=req.session;
  //Session set when user Request our app via URL
  if(sess.email) {

  // * This line check Session existence.
  // * If it existed will do some action.

  res.redirect('/admin');
  } else {
  res.render('index.html');
  }
});


app.post('/login',function(req,res){
  sess=req.session;
  //In this we are assigning email to sess.email variable.
  //email comes from HTML page.
  sess.email=req.body.email;
  res.end('done');
});

app.get('/admin',function(req,res){
  sess=req.session;
  if(sess.email) {
    res.write('
    <h1>Hello '+sess.email+'</h1>
  ');
  res.end('<a href="+">Logout</a>');
  } else {
    res.write('
    <h1>Please login first.</h1>
  ');
  res.end('<a href="+">Login</a>');
  }
});

app.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

app.listen(port);