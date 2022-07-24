var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var db = require('./conn2');


app.all("*", (req, res, next) => {

	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Max-Age","1728000");
	//res.setHeader("Content-Type", "application/json;charset=utf-8");
	if (req.method == 'OPTIONS')
        res.sendStatus(200);
    else
        next();
      
});

// app.use(express.json);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/u', (req, res) => {
	db.get(req.query,(err,rez)=>{
		res.send(rez[0]);
	});
});

app.get('/u/all', (req, res) => {
	db.getAll((err,rez)=>{
		res.send(rez);
	});
});

app.post('/u', (req, res) => {
	db.add(req.body,(err,rez) => {
		if(err){
			console.log(err);
			res.send('error');
			return;
		}
		res.send('ok');
	})
})

app.delete('/u',  (req, res) => {
	db.del(req.query,(err,rez)=>{
		if(err){
			console.log(err);
			res.send('error');
			return;
		}
		res.send('ok');
	});
})

app.put('/u',  (req, res) => {
	db.update(req.body,(err,rez)=>{
		if(err){
			console.log(err);
			res.send('error');
			return;
		}
		res.send('ok');
	});
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})