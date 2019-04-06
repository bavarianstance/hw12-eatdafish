// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// def fish function, orm routes and callback functions
var fish = {
  // list all fish method
  all: function(cb) {
    orm.all("fish", function(res) {
      cb(res);
    });
  },
  // create new fish method
    create: function(name, cb) {
    orm.create("fish", [
      "fish_name", "eaten"
      ],
      [
      name, false
      ], cb);
  },
  // update eaten value for fish by unique_id method
  update: function(id, cb) {
    var unique_id = "id=" + id;
    orm.update("fish",{
      eaten: true
    }, unique_id, cb);
  }
}; 


// Export the database functions for the controller (fish_controller.js).
module.exports = fish;
