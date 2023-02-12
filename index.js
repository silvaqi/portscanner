const portscanner = require('portscanner')
const axios = require('axios')
const prompt = require("prompt")

prompt.start();

prompt.get(['ip'], function (err, result){
	const ports = [22, 80, 443]
	const portas = Object.values(ports);
	console.log(portas)
	portscanner.checkPortStatus(portas, result.ip, function(error, status){
	console.log(status)
})
})


//axios.get("localhost").then( response =>{
//	console.log(response)
//})

//portscanner.checkPortStatus(10000, '177.153.69.5', function(error, status){
//	console.log(status)
//})
