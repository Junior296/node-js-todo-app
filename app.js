const express = require('express');
const todoroutes = require('./routes/todo')
const authroutes = require('./routes/auth')
const cors = require('cors');
const app = express();
const auth = require('./middleware/auth')

app.use(express.json());
app.use(cors())

app.use('/api/todos', auth, todoroutes);
app.use('/api/auth', authroutes);

module.exports = app;