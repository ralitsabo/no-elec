var express = require('express');
var router = express.Router();
var User = require('../scripts/models/user.js');
var Address = require('../scripts/models/address.js');

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

/* GET Addressrlist page. */
router.get('/addresslist', function(req, res) {
  var db = req.db;
  var collection = db.get('addresses');
  collection.find({},{},function(e, docs){
    res.render('addresslist', {
      "addresslist" : docs
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
  var userPassword = req.body.userpassword;

  var user = new User(userName, userEmail, userPassword);

  if(user.save()) {
    res.redirect("userlist");
  } else {
    res.send("There was a problem.");
  }
});

router.get('/newaddress', function(req, res) {
  res.render('newaddress', { title: 'Add New Address' });
});

router.post('/addaddress', function(req, res) {

  var db = req.db;

  var userAddressId = req.body.user_address_id;
  var city = req.body.city;
  var streetName = req.body.street_name;
  var streetNumber = req.body.street_number;
  var neighborhood = req.body.neighborhood;
  var blockNumber = req.body.block_number;

  var address = new Address(userAddressId, city, streetName, streetNumber, neighborhood, blockNumber);

  if(address.save()) {
    res.redirect("addresslist");
  } else {
    res.send("There was a problem.");
  }
});

module.exports = router;