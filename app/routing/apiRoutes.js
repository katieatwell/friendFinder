var friends = require("../data/friends.js");
var fs = require("fs");
var bodyParser = require("body-parser");

module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //Display all users that have filled out friend survey
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //Create new "friends" JSON
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log("body: %j", newFriend);
        res.json(newFriend);
        console.log("array: %j", (friends.friends));
        friends.friends.push(newFriend);
        fs.appendFile("./app/data/friends.js", JSON.stringify(newFriend), "utf8", function(err) {
            if (err) throw err;
        });

    });
};
