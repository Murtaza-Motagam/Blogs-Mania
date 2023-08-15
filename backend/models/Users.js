const mongoose = require('mongoose');
const {  Schema } = mongoose;

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('blog-users', UserSchema);
module.exports = Users;