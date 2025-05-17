const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todo-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected successfully');
    } catch (error) {
        console.error('DB connnection failed', error.message);
        process.exit(1) // exit the app when db connection fails
    }
}

module.exports = connectDB;