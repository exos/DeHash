var dehash = require('./lib/dehash');
var sources = require('./sources');




hash = process.argv[2]; // 'cae18158bda2c54186f025c90a818082';
type = null;


for (i in sources) {

	(function (i) {
		dehash(hash, type, sources[i], function (err, data) {
			if (err) {
				console.log(i + " [error] :" +  err);
			} else {
				console.log(i + ":" + data);
			}
		});
	})(i);

}
