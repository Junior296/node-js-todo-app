const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    viewTodo
} = require('../controllers/todoController')


router.route('/').get(getTodos).post(createTodo);


router.route('/:id').patch(updateTodo).delete(deleteTodo).get(viewTodo);


module.exports = router;