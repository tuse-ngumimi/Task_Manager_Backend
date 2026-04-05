const asyncHandler = require('express-async-handler')

// Retrieve task
// GET /api/tasks
// Private
const getTask = asyncHandler(async(req, res) => {

  res.status(200).json({message: 'Get task'});
})

// Create new task
// POST /api/tasks
// Private
const setTask = asyncHandler(async(req, res) => {
  if(!req.body.text) {
   res.status(400)
   throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Set task'});
  
})

// Update task
// PUT /api/tasks/id
// Private
const updateTask = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Update task ${req.params.id}`});
})

// Delete task
// DELETE /api/tasks/id
// Private
const deleteTask = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Delete task ${req.params.id}`});
})


module.exports = {
  getTask,  setTask, updateTask, deleteTask
}
