/*
Author : Kumar Nitesh
website ; www.kumar-nitesh.com
*/

var net = require("net");

var client = new net.Socket();

client.connect(9000,"127.0.0.1");

client.on('data',function(data){
	console.log('Data==>'+ data);
	client.destroy();
});

client.on('close',function(){
	console.log('connection close');

});
