/**
 * 常规的node服务
 */

var http = require('http');
var fs = require('fs');
var path = require("path");

var app = http.createServer(function(req,res){
	if(req.method === 'GET'){
		switch(req.url){
			case '/index.html':
			fs.readFile(path.join(__dirname,'index.html'),function(err,data){
				if(err){
					throw err;
				}
				res.writeHeader(200,{'Content-Type':'text/html'});
				res.write(data.toString());
				console.log(data.toString());
				res.end();
			});

			break;
			case '/st.css':
			fs.readFile(path.join(__dirname,'st.css'),function(err,data){
				if(err){
					throw err;
				}
				res.writeHeader(200,{'Content-Type':'text/css'});
				res.write(data.toString());
				res.end();
			});
			break;
		}
	}else if(req.method === 'POST'){
		switch(req.url){
			case '/post.html':
			fs.readFile(path.join(__dirname,'post.html'),function(err,data){
				if(err){
					throw err;
				}
				
					console.log(data.toString());
			
				res.writeHeader(200,{'Content-Type':'text/html'});
				res.write(data.toString());
				console.log(req)
				res.end();
			});
			break;
		}
	}else{
		console.log("no support");
	}
}).listen(8081);
console.log("success");