const Todo = require('../models/todos_schema')

//  CONTROLELR ACTION FOR SHOWING TODOSLIST FROM DATABBASE
module.exports.home = async function (req, res) {
  let todos = await Todo.find({})
  return res.render('home', {
    title: 'Todo App',
    todos: todos,
  })
}
