var socket = io();

socket.on('connect', function(){
	console.log('user connected to socket.io');
});

socket.on('message', function(message){
	console.log('New Message !');
	console.log(message.text);
});

socket.emit('message', {
	text : 'Hay bro !'
});