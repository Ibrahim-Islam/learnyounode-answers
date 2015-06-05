var http = require('http');

first(second);

function first(callback){
	http.get(process.argv[2], function(res){
		res.setEncoding('utf8');

		var content = '';
		
		res.on('data', function(chunk){
			content += chunk;
		});

		res.on('end', function(){
			console.log(content);
			content = '';
			callback();
		});
	});
}

function second(){
	http.get(process.argv[3], function(res){
		res.setEncoding('utf8');

		var content = '';
		
		res.on('data', function(chunk){
			content += chunk;
		});

		res.on('end', function(){
			console.log(content);
			content = '';
			third();
		});
	});
}

function third(){
	http.get(process.argv[4], function(res){
	res.setEncoding('utf8');

	var content = '';
	
	res.on('data', function(chunk){
		content += chunk;
	});

	res.on('end', function(){
		console.log(content);
		content = '';
	});
});
}