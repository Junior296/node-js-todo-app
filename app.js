const express = require('express');
const connectDB = require('./config/db');
const todoroutes = require('./routes/todo')

const app = express();

connectDB();

app.use(express.json());

app.use('/api/todos', todoroutes);



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
