const mysql = require('mysql');
//create database connection
const conn = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '12345',
 database: 'mfu',
 port: 3306
});
//connect to database
conn.connect((err) => {
 if (err) throw err;
 console.log('Mysql Connected...');
});
module.exports = conn;