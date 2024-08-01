const User = require('../Models/userModel');

// Mock function to validate password
const isValidPassword = (inputPassword, userPassword) => {
    return inputPassword === userPassword; // In a real app, use bcrypt
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (user) => {
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (!isValidPassword(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    });
};
