var socket=io();

socket.on('connect', function() {
	console.log('user connected via socket.io');
});