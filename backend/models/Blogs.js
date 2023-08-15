const mongoose = require('mongoose');
const {  Schema } = mongoose;

const BlogsSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "General",
        required: true,
    },
    bloguser: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('blogs', BlogsSchema);