const User = require('../models/userModel');


exports.renderUsers = (req, res) => {
    const users = User.getAllUsers();
    res.render('index', { users });
};
