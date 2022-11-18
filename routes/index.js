const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home_controllers')

console.log('router loaded')

router.get('/', homeController.home)
router.use('/todo', require('./addtask'))
router.use('/todo', require('./deleteTask'))

module.exports = router
