var fs = require('fs');

/*
function start(response) {
	console.log("Request handler 'start' was called.");
	var body = 	'<html>'+
					'<head>'+
						'<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
					'</head>'+
					'<body>'+
							'<p> Hello this is a paragraph for Homepage </p>' +
					'</body>'+
				'</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
*/

/*
function start(response) {
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream("./homepage.html").pipe(response);
}
*/

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
	//var cssFileName = url.parse(request.url).pathname;
	var cssFileName = pathname;
	fs.readFile('./sites/stylesheets' + cssFileName, function (err, css) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/css"});  
	    response.write(css);  
	    response.end();  
	});
}

exports.start = start;
exports.enterName = enterName;
exports.otherSite = otherSite;

exports.style = style;