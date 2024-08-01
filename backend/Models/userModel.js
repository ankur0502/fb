const db = require('./db');

const User = {
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM user WHERE email = ?';
        db.query(query, [email], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }
};

module.exports = User;
