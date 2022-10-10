const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_app');

const todoSchema = new  mongoose.Schema({
    desc:String,
    cate:String,
    date:String
});

const todoList = mongoose.model('todos',todoSchema);

module.exports = todoList;