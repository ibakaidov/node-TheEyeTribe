var net = require('net');

module.exports = function(optoins){
	var  options = options||{};
	var connectionOptions = {
		ip: options.ip||'127.0.0.1',
		port: options.port||6555
	};
	var timeout = options.timeout||2000;
	var events = require('events');
	var ee = new events.EventEmitter();
	var socket = net.createConnection(connectionOptions);
	
	socket.on('error', function(data) {
		ee.emit('error', data);
	});
	socket.on('close', function(data) {
		ee.emit('close', data);
	});
	socket.on('data', function(data) {
		data = JSON.parse(data);
		ee.emit('data', data);
	});
	function heart() {
		socket.write(JSON.stringify({
		    "category": "heartbeat"
		}));
	}
	setInterval(heart, timeout);
	heart();
	return ee;
};