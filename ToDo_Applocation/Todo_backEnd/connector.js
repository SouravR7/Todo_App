const mongoose = require('mongoose');
const {todoSchema} = require('./schema');
const mongoUrl = "mongodb://localhost/Todos";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connection Established'))
.catch((err)=> console.log('Error While Connecting',err));

const Todo_list = mongoose.model('Todo',todoSchema);

exports.Todo_list = Todo_list;