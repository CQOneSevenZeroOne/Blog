//var app = require('./app.js')
var conn = require("./config/db.js");

//
//app.post("/addComm",function(req,res){
//	res.append("Access-Control-Allow-Origin","*");
//	console.log("收到一个请求");
//	res.send("ok");	
//})
//
//app.get("/showComm",function(req,res){
//	
//})

module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(bodyParser.json());
	app.post("/addComm", function(req, res) {
		console.log(req.body);
		var sql = `insert into comm values("","${req.body.usrname}","${req.body.comment}","${req.body.artid}","${req.body.email}","${req.body.ptime}")`;
		conn.query(sql,function(err,rs){
			if(err) console.log(err.message);
			res.send("ok");		
		})	
	})
	app.post("/showComm", function(req, res) {
		var sql = `select * from comm where artid =${req.body.artid}`;
		conn.query(sql,function(err,rs){
			if(err) console.log(err.message);
			res.send(rs.toString());		
		})	
	})
}