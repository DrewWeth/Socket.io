var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('', function(msg){
    io.emit('', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});