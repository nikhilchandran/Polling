/**
 * @author nikhil
 */
// // var body = JSON.stringify({
    // // message: "bar"
// // })
// // var request = google.request('POST', '/get_stuff', { 
    // // host: 'server',
    // // 'Content-Length': body.length,
    // // 'Content-Type': 'application/json' 
    // // });
// // request.write(body);
// // request.end();
// 
 // var request = require('request');
 // var id = setInterval(function() {
        // ws.send(JSON.stringify(function() {
//             
//            
// 
// var options = {
  // uri: 'http://192.168.4.117:8081',
  // method: 'POST',
  // json: {
    // "serverfunction": "updateAll",
    // "message":"hh"
  // }
// };
// 
// request(options, function (error, response, body) {
  // if (!error && response.statusCode == 200) {
    // console.log(body.id) // Print the shortened url.
  // }
// });
//             
//             
//             
              // })
    // }, 1000);

var request = require('request');

var options = {
  uri: 'http://192.168.4.117:8081',
  method: 'POST',
  json: {
    "serverfunction": "updateAll",
    "message":"hh"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id) // Print the shortened url.
  }
});