const express = require('express');
const todoroutes = require('./routes/todo')

const app = express();

app.use(express.json());

app.use('/api/todos', todoroutes);


module.exports = app;