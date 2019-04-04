var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var fish = require("../models/fish.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/fish");
  });

router.get("/fish", function(req,res){
  fish.all(function(fishData){
    res.render("index", {fish_data: fishData});
  });
});

router.post("/fish/add", function(req,res){
  fish.create(req.body.fish_name, function(response){
    console.log(response);
    res.redirect("/");
  });
});

router.put("/fish/:id", function(req,res){
  fish.update(req.params.id, function(response){
    console.log(response);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
