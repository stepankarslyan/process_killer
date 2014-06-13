var exec = require("child_process").exec;
var zmq = require("zmq");

var responder = zmq.socket("asyncrep");
responder.bind("tcp://*:4040");
console.log("Binding to: tcp://*:4040");

responder.on("message", function(message, response) {
  var request = JSON.parse(message);
  console.log("Requester sends: " + JSON.stringify(request));
  exec("kill -9 " + request.pid, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    
  });
    
  console.log("Process with" + request.pid + " " + "was killed");
  response.send("Process with" + request.pid + " " + "was killed");
});
