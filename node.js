
/**
 * node 服务入口文件
 */
var User = require("./src/mysql/userinfo.js");
var express = require('express');
var path = require('path');
var bodyparer = require("body-parser");
var app = express();
var history = require('connect-history-api-fallback');//histroy路由控件

app.use(bodyparer.json())
app.use(history())
app.use(express.static(path.join(__dirname, 'dist'))) 
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    next();
}).get('/', function (req, res) {
  res.sendFile("./dist/index.html");
}).post("/login",function(req, res){
    User.getUser(req.body).then(d=> res.send(d))
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})