var printdir = require('./printdir');

printdir(process.argv[2], process.argv[3], function(err, files){

	if (err) {
		console.log(err);
		return;
	};

	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	};

});