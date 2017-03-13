var socket = io();

socket.on('connect', function() {
	console.log('user connected to socket.io');
});

socket.on('message', function(message) {
	console.log('New Message !');
	console.log(message.text);
	var momentTimestamp = moment.utc(message.timestamp).local().format('H : mm a');
	$('.message').append('<p><b>' + momentTimestamp + '</b> :' + message.text + '<p>');
});

var $form = $('#message-form');

$form.on('submit', function(event) {
	$message = $form.find('input[name=message]');
	event.preventDefault();
	socket.emit('message', {
		text: $message.val()
	});
	$message.val('')
});