var fs = require('fs');

function start(response) {
	console.log("Request handler 'start' was called.");
	fs.readFile('./sites/homepage.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
	});
}

function enterName(response) {
	console.log("Request handler 'enterName' was called.");
	fs.readFile('./sites/enterName.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);
	    response.end();  
	});
}

function otherSite(response) {
	console.log("Request handler 'otherSite' was called.");
	fs.readFile('./sites/otherSite.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
	});
}

//Handler for css files
function style(response,request,pathname) {
	console.log("Request handler 'style' was called.");
	var cssFileName = pathname;
	fs.readFile('./sites/stylesheets' + cssFileName, function (err, css) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/css"});  
	    response.write(css);  
	    response.end();  
	});
}

//Handler for javascript files
function script(response,request,pathname) {
	console.log("Request handler 'script' was called.");
	var jsFileName = pathname;
	fs.readFile('./sites/scripts' + jsFileName, function (err, js) {
		if (err) throw err;
		response.writeHeader(200, {"Content-Type": "text/javascript"});
		response.write(js);
		response.end();
	});
}

exports.start = start;
exports.enterName = enterName;
exports.otherSite = otherSite;
exports.style = style;
exports.script = script;