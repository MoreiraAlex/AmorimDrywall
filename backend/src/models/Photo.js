const mongoose = require('mongoose');

const Photo = mongoose.model('Photo', {
    name: String,
    size: Number,
    key: String,
    url: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Photo;