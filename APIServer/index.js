var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var dissectUrl = url.parse(request.url, true);
	response.writeHead(200, { 'Content-Type': 'application/json' })

	if(dissectUrl.pathname === '/api/parsetime'){
		var date = new Date(dissectUrl.query["iso"]);
		response.write(JSON.stringify({ hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds() }));
	}

	if(dissectUrl.pathname === '/api/unixtime'){
		var date = new Date(dissectUrl.query["iso"]);
		response.write(JSON.stringify({ unixtime : date.getTime() }));
	}

	response.end();
});

server.listen(process.argv[2]);