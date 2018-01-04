module.exports = function(app){
	var conn = require("../config/db.js");
	
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	//存文章
	app.post("/addArtical",function(req,res){
		res.append("Access-Control-Allow-Origin","*");
		var data = req.body;
		console.log(data);
		var sql = `insert into article (title,cont,author,ptime,catname,contt)
		values
		('${data.title}','${data.cont}','${data.author}','${data.ptime}','${data.catname}','${data.contt}')`;
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
	//加载文章
	app.post("/getArticle",function(req,res){
		res.append("Access-Control-Allow-Origin","*");
		var sql = "select id,title,contt,author,clicknum,commentnum,DATE_FORMAT(ptime,'%Y-%m-%d %H:%i:%S')as time  from article limit 5";
		conn.query(sql,function(err,rs){
			if(err) console.log(err.message);
			else{
				res.send(rs);
			}
		})
	})
}
