var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('lib/utf8-php'));

//app.get('/',function(req,res){
//	app.
//})
require("./addComment.js")(app);
require("./addArticle.js")(app);

app.listen(9999);
module.exports = app;

