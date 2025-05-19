const jwt = require('jsonwebtoken');
const User = require('../models/User')

const auth = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Access denided, No token provided' });
    };


    const token = authHeader.split(' ')[1];
    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const decodedUser = req.user = decoded;
        const user = await User.findById(decodedUser.userId).then((user) => {
            return ({
                id: user._id,
                username: user.username
            })
        });
        // res.status(200).json(user)  
        
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};


module.exports = auth;