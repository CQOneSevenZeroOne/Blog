var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/html'));
app.use(express.static(__dirname+'/plug/ueditor'));

require("./routes/addComment.js")(app);
require("./routes/addArticle.js")(app);

app.listen(9999);

