const {Schema, mongoose} = require('mongoose');

const todoSchema = new Schema({
    name: String,
    description: String,
    isCompleted: Boolean
})

exports.todoSchema = todoSchema;