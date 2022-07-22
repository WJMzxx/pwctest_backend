var express = require('express');
var app = express();

app.all("*", function (req, res, next) {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "*");
	//允许的header类型
	res.header("Access-Contro1-Allow-Headers", "content-type");
	//跨域允许的请求方式
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	if (req.method.toLowerCase() == 'options ')
		res.send(200);//让options尝试请求快速结束else
	next();
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/a', function (req, res) {
   res.send('Hello a');
})

app.post('/a', function (req, res) {
	console.log('a')
   res.send('Hello a师大、');
})

app.delete('/a', function (req, res) {
	console.log('dela')
   res.send('Hello de');
})

app.put('/a', function (req, res) {
	console.log('pu')
   res.send('Hello pu');
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})