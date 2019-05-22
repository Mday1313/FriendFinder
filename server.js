// Dependencies
var express = require("express");
var path = require("path");

// Require js files
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require js files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);
});