var monk = require('monk');
var db = monk('127.0.0.1:27017/project');

var DBInterface = (function(){
  function DBInterface(){}

  DBInterface.prototype.saveUser = function(user) {
    var collection = db.get('usercollection');
    collection.insert({
      "username" : user._name,
      "email" : user._email,
      "password" : user._password,
    }, function (err, doc) {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
    return 1;
  };

  DBInterface.prototype.saveAddress = function(address) {
    var collection = db.get('addresses');
    collection.insert({
      "user_address_id" : address.user_address_id,
      "city" : address.city,
      "street_name" : address.street_name,
      "street_number" : address.street_number,
      "neighborhood" : address.neighborhood,
      "block_number" : address.block_number,
    }, function (err, doc) {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
    return 1;
  };

  return DBInterface;
}());

module.exports = DBInterface;