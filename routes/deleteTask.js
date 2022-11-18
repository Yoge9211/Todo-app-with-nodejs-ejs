const express = require('express')
const router = express.Router()

const deleteTaskController = require('../controllers/delete_Controller')

router.get('/delete/:id', deleteTaskController.deleteTask)
console.log('delete router')
module.exports = router
