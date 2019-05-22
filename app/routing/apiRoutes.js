
// Dependencies
var surveyResults = require("../data/friends.js");



module.exports = function (app) {


  var firstArr = [];
  var secondArr = [];
  var resultArr = [];

  // Displays all json
  app.get("/api/friends", function (req, res) {
    return res.json(surveyResults);
  });

  app.post("/api/friends", function (req, res, err) {

    if (err) {
      console.log(err);
    }
    var newUser = req.body;
// Loop through current users scores and make into integers
// This will be pushed to API as integers so there is no need to parseInt them once added
    for(var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(newUser.scores[i]);
      
    }
    // var to get index num of closest match, will be sent back below as res.json
    var bestMatchIndex = 0;
    // Each loop through the friends will replace this if lower, link to bestMatchIndex in if statement
    var minDiff = 40;

    for(var i = 0; i < surveyResults.length; i++) {
      var totalDiff = 0;
      for(var j = 0; j < surveyResults[i].scores.length; j++) {
        var dif = Math.abs(newUser.scores[j]-surveyResults[i].scores[j]);
        totalDiff += dif;
      }
      if(totalDiff < minDiff) {
        bestMatchIndex = i;
        minDiff = totalDiff;
      }
    }
    surveyResults.push(newUser);
    res.json(surveyResults[bestMatchIndex]);
    
  });
}





