//Installing Required NPM Packages
var express = require("express");
var bodyParser = require("body-parser");


//Setting up server using express
var app = express();
var PORT = process.env.PORT || 8080;

//Connecting express and body-parser to make data readable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App on: " + PORT);
});
