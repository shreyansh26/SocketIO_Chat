//'use strict';

// Packages
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Port
var port = process.env.PORT || 3000;

// Get requests to various files
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/app.css', function(req, res){
  res.sendFile(__dirname + '/app.css');
});

// Socket.io connection event
io.on('connection', function(socket){
  socket.on('chat_message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat_message', msg);
  });
});


http.listen(port, function(){
  console.log(`App listening on port: ${port}`);
});
