var server = require("./lib/server");
var router = require("./lib/router");
var requestHandlers = require("./lib/requestHandlers");
var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/enterName"] = requestHandlers.enterName; 
handle["/otherSite"] = requestHandlers.otherSite;
handle["/style"] = requestHandlers.style;
handle["/script"] = requestHandlers.script;

server.start(router.route, handle);