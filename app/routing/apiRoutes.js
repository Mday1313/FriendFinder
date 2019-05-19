
module.exports = function(app) {

    require("../data/friends.js")(app);

   
    
// Displays all json
app.get("/api/friends", function(req, res) {
    return res.json(surveyResults);
  });

  app.post("/api/friends", function(req, res, err) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (err) {
        console.log(err);
    }
    var newUser = req.body;
    
    surveyResults.push(newUser);
   
    
    // if (tableArr.length < 5){
    //     tableArr.push(newTable);
    // } else {
    //     waitingArr.push(newTable);
    // }
    
    res.json(newUser);
    console.log(newUser);
  
    
  
    
  });
}