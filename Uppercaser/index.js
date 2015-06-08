var http = require('http');

var server = http.createServer(function(request, response){
	var body = '';

	if(request.method === 'POST'){

		request.on('data', function(chunk){
			body += chunk.toString();
		});

		request.on('end', function(){
			response.end(body.toUpperCase());
		});

	} else{
		response.end();
	}

});

server.listen(process.argv[2]);