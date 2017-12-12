var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
    //Connect User to HomePage by default
    app.get("/", function(req, res) {
        res.sendFile("/home/ubuntu/workspace/Assignments/FriendFinder/app/public/survey.html");
    });

    //Connect User to Survey Page (this will be on click)
    app.get("/friendsurvey", function(req, res) {
        res.sendFile("/home/ubuntu/workspace/Assignments/FriendFinder/app/public/survey.html");
    });

};
