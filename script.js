var request = require('ajax-request');
var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBetmiS4g_egz4SgpgXiEz-MQ9PYYLoNsk&location=13.681099891662598,100.74700164794922&radius=1000&name=Suvarnabhumi Airport&type=airport";

//var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


 
request({
  url: queryURL,
  method: 'GET',
 /* data: {
    query1: 'value1'
  }*/
}, function(err, res, body) {
  console.log(res);
});