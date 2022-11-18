const express = require('express')
const router = express.Router()

const addTaskController = require('../controllers/addtaskcontroller')

router.post('/addtask', addTaskController.addTask)
module.exports = router
