DeHash
======

Search hashes on several hash-dictionaries sites (hashes dbs)

CLI usage
---------

```
[exos@Hexodica dehash]$ node dehash-cli.js e10adc3949ba59abbe56e057f20f883e
md5.rednoize.com:123456
xdecrypt.com:123456
md5decryption.com:123456
md5.noisette.ch:123456
tmto.org no md5 (base64 of the result):null
md5pass.info:123456
md5.thekaine.de:123456
md5crack.com:123456
tmto.org only md5 (base64 of the result):MTIzNDU2

```

Module usage
------------

```JavaScript
var dehash = import('dehash').dehash;
var sources = import('dehash').sources;

hash = 'e10adc3949ba59abbe56e057f20f883e';

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
```

INSTALL
-------

You need install node.js, see http://nodejs.org/

With node.js installed, you have:

```
[you@youmachine ~]$ npm install dehash
```

Or with Git:

```
[you@youmachine ~]$ git clone git://github.com/exos/DeHash.git dehash
[you@youmachine ~]$ cd dehash
[you@youmachine ~]$ npm install -d
```

Be Happy!
