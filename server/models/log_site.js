const mongoose = require('mongoose');

var log_site = mongoose.model('Site', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    url: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    entryDate: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Number,
        default: null
    }
});

module.exports = {log_site};