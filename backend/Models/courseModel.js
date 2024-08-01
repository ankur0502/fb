const db = require('./db');

const Course = {
    getAll: (callback) => {
        const query = 'SELECT * FROM course';
        db.query(query, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    create: (course, callback) => {
        const query = 'INSERT INTO course (cname, fees, duration) VALUES (?, ?, ?)';
        db.query(query, [course.cname, course.fees, course.duration], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    
    
    update: (cid, course, callback) => {
        const query = 'UPDATE course SET cname = ?, fees = ?, duration = ? WHERE cid = ?';
      
        db.query(query, [course.cname, course.fees, course.duration, cid], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    delete: (cid, callback) => {
        const query = 'DELETE FROM course WHERE cid = ?';
        db.query(query, [cid], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = Course;
