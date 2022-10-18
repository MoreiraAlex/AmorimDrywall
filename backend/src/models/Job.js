const mongoose = require('mongoose');

const Job = mongoose.model('Job', {
    desc: String,
    img: String,
    tags: [String],
    photos: [String],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Job;