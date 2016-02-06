
/*
Author : Kumar Nitesh
website ; www.kumar-nitesh.com
*/
var net= require('net');

var server=net.createServer(function(socket){
	console.log("connection from "+ socket.remoteAdress);
	socket.end("Hello World\n");
});

server.listen(9000,"127.0.0.1");