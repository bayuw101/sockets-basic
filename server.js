var express = require('express');
var app = express();
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000;
var io = require('socket.io')(http);
var moment = require('moment');
var now = moment();

io.on('connection', function(socket){
	console.log("You're connected with socket.io");
	socket.on('message', function(message){
		console.log("Message received : " + message.text);
		message.timestamp = now.valueOf();
		io.emit('message', message);
	});
	socket.emit('message', {
		text : 'Welcome to chat room !',
		timestamp : now.valueOf()
	});
});

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
	console.log('server started !');
});