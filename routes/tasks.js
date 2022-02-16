const express = require('express');
const router = express.Router();
// express.Router() is often referred to as a mini-app 
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');


router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router; 


