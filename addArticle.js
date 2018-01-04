module.exports = function(app){
	var conn = require("./config/db.js");
	
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	//存文章
	app.post("/addArtical",function(req,res){
		res.append("Access-Control-Allow-Origin","*");
		var data = req.body;
		var sql = `insert into article ()
		values
		("",)`;
		conn.query(sql,function(err,rs){
			if(err) res.send(err.message);
			else{
				res.send("ok");
			}
		})
	})
	//根据问文章id查询文章
	app.post("/showArtical",function(req,res){
		res.append("Access-Control-Allow-Origin","*");
		var sql = `select * from article where id=${req.body.id}`;
		conn.query(sql,function(err,rs){
			if(err) console.log(err.message);
			else{
				res.send(rs);
			}
		})
	})
}
