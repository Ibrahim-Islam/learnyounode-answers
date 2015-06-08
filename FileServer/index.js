var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var fileReadable = fs.createReadStream(process.argv[3]);
	var totalContent = '';

	fileReadable.on('data', function(chunk){
		totalContent += chunk;
	});

	fileReadable.on('end', function(){
		response.end(totalContent);
	});
});

server.listen(process.argv[2]);