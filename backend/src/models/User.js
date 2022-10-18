const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = User;