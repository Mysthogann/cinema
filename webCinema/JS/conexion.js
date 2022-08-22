var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : 'adminadmin',
  database : 'cinema'
});

connection.query('SELECT * FROM cinema', function (error, results, fields) {
  if (error) throw error;
  // connected!
}); 