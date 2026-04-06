const express = require('express');
const router = express.Router()
const {getTask, getSingleTask, setTask, updateTask, deleteTask} = require('../controllers/taskController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTask).post(protect, setTask)
router.route('/:id').get(protect, getSingleTask).put(protect, updateTask).delete(protect, deleteTask)

module.exports = router 