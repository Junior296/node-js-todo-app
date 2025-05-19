const Todo = require('../models/Todo')

const getTodos = async (req, res) => {
    try {
        const todos = (await Todo.find()).reverse();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTodo = async (req, res) => {
    const todo = new Todo({
        name: req.body.name,
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        if (req.body.name !== undefined) todo.name = req.body.name;
        if (req.body.completed !== undefined) todo.completed = req.body.completed;

        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }

};

const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        await todo.deleteOne();

        res.status(200).json({ message: 'Todo deleted' });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const viewTodo = async (req, res) => {
try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    
    res.status(200).json({
        id: todo._id,
        name: todo.name,
        completed: todo.completed
    });
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    viewTodo
}