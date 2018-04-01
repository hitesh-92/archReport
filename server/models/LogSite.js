const mongoose = require('mongoose');

var LogSite = mongoose.model('Site', {
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
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        default: null
    }
    // _creator: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // }
});

module.exports = {LogSite};