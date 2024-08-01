const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getCourses);
router.post('/', courseController.createCourse);
router.put('/:cid', courseController.updateCourse);
router.delete('/:cid', courseController.deleteCourse);

module.exports = router;
