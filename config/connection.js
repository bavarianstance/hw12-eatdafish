// Set up MySQL connection.
var mysql = require("mysql");
// def connection var
var connection;

// def DB connect routes incl JAWSDB if avail
if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}
 else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "iseeyoutoorsql",
  database: "fish_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
