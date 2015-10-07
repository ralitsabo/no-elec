require('console');

var User = function () {
  function User(name, email) {
    this._name = name;
    this._email = email;
  }

  User.prototype.save = function() {
    return this._name + ' ' + this._email;
  };

  return User;
}();

var user = new User('rali', 'bali')

// var user = function() {
//   function user(name, email) {
//     User.call(this, name, email, save());
//   };

//   user.prototype = new User();
//   // to work everywhere, something like check point (it is not necessary)
//   user.prototype.constructor = User;
//   user.prototype.toString = function() {
//     return Person.prototype.save.call(this)
//   };

//   return user;

// }();


console.log(user.save());
