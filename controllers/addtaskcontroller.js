const todoList = require('../models/todos_schema')

//  CONTROLELR ACTION FOR ADDING TASK
module.exports.addTask = async function (req, res) {
  let data = new todoList(req.body)
  let result = await data.save()
  console.log(result)
  return res.redirect('back')
}
