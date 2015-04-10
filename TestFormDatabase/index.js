var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/enterName"] = requestHandlers.enterName; 
handle["/otherSite"] = requestHandlers.otherSite; 
server.start(router.route, handle);