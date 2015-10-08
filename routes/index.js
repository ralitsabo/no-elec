var express = require('express');
var router = express.Router();
var User = require('../scripts/models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  var db = req.db;

  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var user = new User(userName, userEmail);

  if(user.save()) {
    res.redirect("userlist");
  } else {
    res.send("There was a problem.");
  }
});

module.exports = router;