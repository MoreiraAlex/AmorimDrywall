const mongoose = require('mongoose');

const Job = mongoose.model('Job', {
    name: String,
    desc: String,
    img: [
        String
    ],
    photos: [
        [String]
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Job;