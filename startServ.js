/*
Author : Kumar Nitesh
website ; www.kumar-nitesh.com
*/

var http= require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type" :"text/plain"});
	response.end("Hello World\n");
});

server.listen(9000);

// To access use localhost:9000 on your browser