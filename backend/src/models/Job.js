const mongoose = require('mongoose');

const Job = mongoose.model('Job', {
    name: String,
    desc: String 
});

module.exports = Job;