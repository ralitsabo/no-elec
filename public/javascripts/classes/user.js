var User = (function() {
  function User(username, useremail) {
    this._name = username;
    this._email = username;
  }

  User.prototype.validateEmail =  function(useremail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat) && useremail !== "") {
      document.form1.text1.focus();
      return true;
    }
    else {
      alert("You have entered an invalid email address!");
      return false;
    }
  };

  User.prototype.validateName = function(username) {
    // Check if username has numbers or other BAD things.
    if(username !== null || username !== "") {
      return true;
    }
    else {
      alert("Name must be filled out");
      return false;
    }
  };

})

// var Rallitsa = new User()