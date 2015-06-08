var net = require('net');

var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear().toString();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	if(month < 10){
		month = "0" + month.toString();
	}

	if(day < 10){
		day = "0" + day.toString();
	}

	socket.end(year + '-' + month.toString() + '-' + day.toString() + ' ' + date.getHours() + ':' + date.getMinutes());
});

server.listen(process.argv[2]);