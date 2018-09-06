var socket = io();

socket.on('connect', function() {
	console.log('user connected via socket.io');
});

socket.on('message', function(message) {
	console.log('New message: ');
	console.log(message.text);
});

//submiting new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();
	var $message=$form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val()
		

	});
	$message.val('');
});