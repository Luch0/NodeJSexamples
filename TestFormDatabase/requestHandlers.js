
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


function enterName(response) {
	console.log("Request handler 'enterName' was called.");
	var body = 	'<html>'+
					'<head>'+
						'<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
					'</head>'+
					'<body>'+
						'<form method="post">' +
							'Name:<br>' +
							'<input type="text" name="name"><br>'+
							'<button id="send" type="submit">Send</button><br>' +
						'</form>'+
						'<p> Hello this is a paragraph for name page</p>' +
					'</body>'+
				'</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function otherSite(response) {
	console.log("Request handler 'otherSite' was called.");
	var body = 	'<html>'+
					'<head>'+
						'<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
					'</head>'+
					'<body>'+
							'<p> Hello this is a paragraph for the other page</p>' +
					'</body>'+
				'</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.start = start;
exports.enterName = enterName;
exports.otherSite = otherSite;