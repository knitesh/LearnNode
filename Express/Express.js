/*
Author : Kumar Nitesh
website : www.kumar-nitesh.com
Description : Simple Express Api demo using Node and Express
npm install express
*/
var express = require("express");

var app=express();

app.get('/',function(req,res){
	res.json({message:"Yes we did it"});
})

app.listen(9000);
