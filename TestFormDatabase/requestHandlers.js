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

function start(response) {
	console.log("Request handler 'start' was called.");
	fs.readFile('./homepage.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
	});
}


function enterName(response) {
	console.log("Request handler 'enterName' was called.");
	fs.readFile('./enterName.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
	});
}


function otherSite(response) {
	console.log("Request handler 'otherSite' was called.");
	fs.readFile('./otherSite.html', function (err, html) {
	    if (err) throw err;      
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
	});
}

exports.start = start;
exports.enterName = enterName;
exports.otherSite = otherSite;