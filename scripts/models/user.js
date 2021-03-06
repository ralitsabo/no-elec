var DBInterface = require('../interfaces/db_interface.js')
var User = (function () {
  function User(name, email, password) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  User.prototype.validateEmail = function() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this._email.match(mailFormat) && this._email !== "") {
      return true;
    }
    else {
      console.log("You have entered an invalid email address!");
      return false;
    }
  };

  User.prototype.validateName = function() {
    if (this._name == "") {
      console.log("You have entered an invalid name!");
      return false;
    }
  };

  User.prototype.save = function() {
    // console.log(this);
    dbInterface = new DBInterface();
    if (this.validateEmail()) {
      return dbInterface.saveUser(this);
    } else {
      return false;
    }
  };

  return User;
}());

module.exports = User;