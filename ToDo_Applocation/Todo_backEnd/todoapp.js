const express = require('express');
const { Todo_list} = require('./connector');
const cors = require("cors");
const port = 7000;
const app = express();
app.use(express.json());

app.use(cors())

app.post('/api/addTodo',(req,res)=>{
    const {name, description, isCompleted} = req.body;

    const todo = new  Todo_list({
        name,
        description,
        isCompleted
    })

    todo.save().then((todo)=> res.json(todo))
})

app.get('/api/getTodo',(req,res)=>{
    Todo_list.find().then((todo)=>{
        res.json(todo)
    }).catch((err)=>res.status(404).send({message: err.message}))
})

app.patch('/api/updateTodo/:id',(req,res)=>{
    const id = req.params.id ;
    const {name, description, isCompleted} = req.body;
    Todo_list.findByIdAndUpdate(id, {
        description
    }).then((result)=> res.send(result)).catch((err)=>res.status(500).send({message: err.message}))

})

app.delete('/api/deleteTodo/:id',(req,res)=>{
    const id = req.params.id;
    Todo_list.findByIdAndRemove(id).then((todo)=>res.send(todo))
    .catch((err)=> res.status(500).send({message: err.message}))
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;