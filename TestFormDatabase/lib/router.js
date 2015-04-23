var path = require('path')

function route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);

	if(path.extname(pathname) === ".css"){
		handle["/style"](response, request, pathname);
	}
	else if(path.extname(pathname) === ".js"){
		handle["/script"](response, request, pathname);
	}
	else if(typeof handle[pathname] === 'function') {
		//console.log(handle[pathname]); //[Function: style]
		handle[pathname](response, request, pathname);
		//handle[pathname](response, request);
	}
	else {
    	console.log("No request handler found for " + pathname);
    	response.writeHead(404, {"Content-Type": "text/html"});
    	response.write("404 Page Not found");
    	response.end();
	} 
}
exports.route = route;