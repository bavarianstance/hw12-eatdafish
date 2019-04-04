// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var fish = {
  all: function(cb) {
    orm.all("fish", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("fish", [
      "fish_name", "eaten"
      ],
      [
      name, false
      ], cb);
  }

  update: function(id, cb) {
    var unique_id = "id=" + id;
    orm.update("fish",{
      eaten: true
    }, unique_id, cb);
  }
}; 


// Export the database functions for the controller (fish_controller.js).
module.exports = fish;
