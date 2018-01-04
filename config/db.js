var mysql = require('mysql');
var conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'cc77',
	database: 'blog'
});

conn.connect();
module.exports = conn
