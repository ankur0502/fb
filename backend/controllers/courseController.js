const Course = require('../Models/courseModel');

exports.getCourses = (req, res) => {
    Course.getAll((courses) => {
        res.json(courses);
    });
};

exports.createCourse = (req, res) => {
    const { cname, fees, duration } = req.body;

    // Simple validation
    if (!cname || !fees || !duration || /\d/.test(cname) || fees <= 0 || duration <= 0) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    const newCourse = { cname, fees, duration };
    Course.create(newCourse, (result) => {
        res.json({ message: 'New course added successfully', courseId: result.insertId });
    });
};

exports.updateCourse = (req, res) => {
    const { cid } = req.params;
    const { cname, fees, duration } = req.body;

    // Simple validation
    if (!cname || !fees || !duration || /\d/.test(cname) || fees <= 0 || duration <= 0) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    const updatedCourse = { cname, fees, duration };
    Course.update(cid, updatedCourse, (result) => {
        res.json({ message: 'Course updated successfully' });
    });
};

exports.deleteCourse = (req, res) => {
    const { cid } = req.params;

    Course.delete(cid, (result) => {
        res.json({ message: 'Course deleted successfully' });
    });
};
