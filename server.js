var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log('user connected via socket.io');
	socket.on('message', function(message) {
		console.log('message received :' + message.text);
	socket.broadcast.emit('message',message);
	});
	socket.emit('message', {
		text: 'welcome to the chat application'
	});
});

http.listen(PORT, function() {
	console.log('Server Started')
});