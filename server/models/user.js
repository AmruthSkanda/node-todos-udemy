const mongoose = require("mongoose");

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 1
    }
});

module.exports = { User };