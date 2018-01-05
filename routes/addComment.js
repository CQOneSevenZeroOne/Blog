module.exports = function(app) {
	var conn = require("../config/db.js");
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(bodyParser.json());
	//存评论
	app.post("/addComm", function(req, res) {
		res.append("Access-Control-Allow-Origin","*");
		console.log(req.body);
		var post = {
			usrname:req.body.usrname,
			comment:req.body.comment,
			artid:req.body.artid,
			email:req.body.email,
			ptime:req.body.ptime
		}
		//var sql = `insert into comm values("","${req.body.usrname}","${req.body.comment}","${req.body.artid}","${req.body.email}","${req.body.ptime}")`;
		conn.query("insert into comm set ?",post,function(err,rs){
			if(err) res.send(err.message);
			else{res.send("ok");}		
		})	
	})
	//根据文章id传所有评论至前端页面
	app.post("/showComm", function(req, res) {
		console.log(req.ip);
		res.append("Access-Control-Allow-Origin","*");
		var sql = `select DATE_FORMAT(ptime,'%Y-%m-%d %H:%i:%S')as ptime,usrname,comment,email from comm where artid =${req.body.artid}`;
		conn.query(sql,function(err,rs){
			if(err) res.send(err.message);
			else{res.send(rs);}
		})	
	})
}