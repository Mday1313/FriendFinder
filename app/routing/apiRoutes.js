
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
    

    surveyResults.forEach(element => {

      console.log(element.scores);

      var arr1 = element.scores;
      var arr2 = newUser.scores;

      for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        firstArr = parseInt(arr1[i]);
        for (var j = 0; j < arr2.length; j++) {
          // console.log(arr2[i]);
          secondArr = parseInt(arr2[i]);
        }
        var r = Math.abs(firstArr - secondArr);
        console.log("dif " + r);
        // resultArr.push(r);
        // var sum = "";
        // resultArr.forEach(element => {
        //   parseInt(sum) += parseInt(element);
         
        //    return sum;
          // });
          // console.log(sum);
          
      }
     
      
    });

   

    

    


    surveyResults.push(newUser);

    res.json(newUser);
    console.log(newUser.scores);




  });
}

// var clearResults =function() {
//   resultArr = [];
// }
function add(accumulator, a) {
  return accumulator + a;
  
}
// var findSum = function(r) {
//   var resultArr = resultArr.push(r);

//   var sum = resultArr.reduce(add, 0);

//        console.log("Sum " + sum);

//   clearResults();
// }



