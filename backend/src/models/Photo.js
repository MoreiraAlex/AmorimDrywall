const mongoose = require('mongoose');

const Photo = mongoose.model('Photo', {
    job: String,
    url: String 
});

module.exports = Photo;