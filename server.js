var app = require('express')();
var http = require('http').Server(app);


app.get('/',function(req,res){
   res.sendFile(__dirname + '/view/index.html');
});

var server = http.listen(3000,function(){
   console.log('escuchando en http://localhost:3000');
});
var click = 0;
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
    socket.emit('conectado');

    socket.on('sendMessage',function(data){
       io.sockets.emit('newMessage',{msg: data});
    });




});