var DBInterface = require('../interfaces/db_interface.js')
var Address = (function () {
  function Address(user_address_id, city, street_name, street_number, neighborhood, block_number) {
    this._userAddressId = user_address_id;
    this._city = city;
    this._streetName = street_name;
    this._streetNumber = street_number;
    this._neighborhood = neighborhood;
    this._blockNumber = block_number;
  }

  Address.prototype.save = function() {
    // console.log(this);
    dbInterface = new DBInterface();
    if (true == true) {
      return dbInterface.saveAddress(this);
    } else {
      return false;
    }
  };

  return Address;
}());

module.exports = Address;