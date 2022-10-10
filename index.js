const express = require('express');
const todoList = require('./config/mongoose')

// set up app and server
const app = express();
const port = 3000;


// middlewares
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

//  accesing static files 
app.use(express.static('assets'));



var todo = [
    {
        desc:"goto coaching ",
        cate:"Work",
        date:"10/10/2022"
    },
    {
        desc:"Bring data cable ",
        cate:"school",
        date:"10/10/2022"
    }

];


// app.get('/', async(req,res)=>{
//     let data = await todoList.find();
//     res.render('home',{
//         title:"Todo App",
//         todo_data:todo

//     })
//  })

app.get('/',(req,res)=>{
    return res.render('home',{
        title:"Todo App",
        todo_data:todo
    });

});


app.post('/add_task',async(req,res)=>{
    let data= new todoList(req.body);
    let result = await data.save()
    console.log(result);
    todo.push(req.body);
    console.log(req.body);
    return res.redirect('/');
});

app.get("/delete", (req, res) => {
    console.log(req.body.id);
    let id = req.query;
  
    let count = Object.keys(id).length;
  
    for (let i = 0; i < count; i++) {
      todo.findByIdAndDelete(Object.keys(id)[i], (err) => {
        if (err) {
          console.log("ERROR", err);
        }
      });
    }
    res.redirect("back");
   
  });


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in server is:${err}`);
    } else {
        console.log(`Server is running on port:${port}`);
    }
});