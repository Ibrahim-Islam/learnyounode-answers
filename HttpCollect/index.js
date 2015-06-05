var http = require('http');


http.get(process.argv[2], function(res){
	res.setEncoding('utf8');

	var content = '';
	
	res.on('data', function(chunk){
		content += chunk;
	});

	res.on('end', function(){
		console.log(content.length);
		console.log(content);
		content = '';
	});
});