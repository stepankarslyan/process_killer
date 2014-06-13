var zmq = require("zmq");
var requester = zmq.socket("asyncreq");
requester.connect("tcp://localhost:4040");
  console.log("Connecting to the 4040");
requester.send(JSON.stringify({pid: "7152"}),function(response) {
  console.log(response);
});

