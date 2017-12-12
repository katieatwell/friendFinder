var friends = require("../data/friends.js");

module.exports = function(app) {

    //Display all users that have filled out friend survey
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //Create new "friends" JSON
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log("body: %j", newFriend);
        res.json(newFriend);
        console.log("array: %j", (friends));
        friends.push(newFriend);
    });
};
