var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/plug/ueditor'));

require("./routes/addComment.js")(app);
require("./routes/addArticle.js")(app);
app.get("/public",function(req,res){
	res.sendFile(__dirname+"/plug/ueditor/demo.html");
})

app.listen(9999);
module.exports = app;

