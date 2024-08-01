const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Ankur@123', // Replace with your MySQL password
    database: 'course_management', // Replace with your database name
});

db.connect((err) => {
    
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

module.exports = db;
