#TheEyeTribe
Module for work with server of device [TheEyeTribe](theeyetribe.com).

##Install
```
npm i --save theyetribe
```

##Api
```js
	var options = {
		ip:'127.0.0.1', //Server adress
		port:6555, //Server port
		timeout:2000 //Heartbeat timeout
	};
	var tet = require('theeyetribe')(options);
	tet.on('data', console.log);
	tet.on('error', console.log);
	tet.on('close', console.log);
```

You can call function without options, in this case will use default options (as example). Or you can ask only one parameter, outher will be default.

Good luck!