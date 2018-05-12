const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a email'
        }
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);
