const Todo = require('../models/todos_schema')

//  CONTROLELR ACTION FOR DELETING TASK
module.exports.deleteTask = function (req, res) {
  Todo.findByIdAndDelete(req.params.id, function (err) {
    console.log(err)
  })
  console.log('task deleted')
  return res.redirect('back')
}
