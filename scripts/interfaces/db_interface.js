var monk = require('monk');
var db = monk('127.0.0.1:27017/project');

var DBInterface = (function(){
  function DBInterface(){}

  DBInterface.prototype.saveUser = function(user) {
    var collection = db.get('usercollection');
    // collection.insert({
    //   "username" : user._name,
    //   "email" : user._email,
    // }, function (err, doc) {
    //   if (err) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    return 1;
  };

  return DBInterface;
}());

module.exports = DBInterface;