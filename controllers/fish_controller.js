// init express npm pkg
var express = require("express");
// init and def router var
var router = express.Router();

// Import the model (fish.js) to use its database functions.
var fish = require("../models/fish.js");

// Create all our routes and set up logic within those routes where required.
// default root route redirect
router.get("/", function(req, res) {
  res.redirect("/fish");
  });
// main route
router.get("/fish", function(req,res){
  fish.all(function(fishData){
    res.render("index", {fish_data: fishData});
  });
});
// post route for add new fish
router.post("/fish/add", function(req,res){
  fish.create(req.body.fish_name, function(response){
    console.log(response);
    res.redirect("/");
  });
});
// put route for update eaten boolean
router.put("/fish/:id", function(req,res){
  fish.update(req.params.id, function(response){
    console.log(response);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
